import Cookies from 'js-cookie'
export const state = () => ({
  products: [],
  product: [],
  cart: [],
  order: [],
  orders: [],
  total: 0,
  token: null,
  role: null,
  user: []
})
export const getters = {
  isAuthenticate: (state) => {
    return state.token != null
  },
  procductCount: (state) => {
    return state.products.length
  },
  OrderCount: (state) => {
    return state.orders.length
  },
  total: (state) => {
    return state.total
  },
  OrderTotalPrice: (state) => {
    let total = 0
    state.orders.forEach((item) => {
      item.total = Number(item.total)
      total += item.total
    })
    state.total = total
  },
  cartItemCount: (state) => {
    return state.cart.length
  },
  cartTotalPrice: (state) => {
    let total = 0
    state.cart.forEach((item) => {
      total += item.product.price * item.quantity
    })
    return (total)
  },
  cartPrice: (state) => {
    let totalcart = 0
    state.cart.forEach((item) => {
      totalcart = item.product.price * item.quantity
    })
    return totalcart
  }
}
export const mutations = {
  clearToken (state) {
    state.token = null
  },
  setToken (state, token) {
    state.token = token
  },
  setRole (state, role) {
    state.role = role
  },
  SET_PRODUCTS (state, products) {
    state.products = products
  },
  SET_PRODUCT (state, product) {
    state.product = product
  },
  ADD_TO_CART (state, { product, quantity }) {
    const productInCart = state.cart.find((item) => {
      return item.product.id === product.id
    })
    if (productInCart) {
      productInCart.quantity += quantity
      return
    }
    state.cart.push({
      product,
      quantity
    })
  },
  SET_CART (state, cardItems) {
    state.cart = cardItems
  },
  REMOVE_PRODUCT (state, product) {
    state.cart = state.cart.filter((item) => {
      return item.id !== product.id
    })
  },
  CLEAR_CART (state) {
    state.cart = []
  },
  DELETE_PRODUCT (state, items) {
    state.products = state.products.filter((item) => {
      return item.id !== items.id
    })
  },
  SET_ORDERS (state, orders) {
    state.orders = orders
  },
  SET_USER (state, user) {
    state.user = user
  }
}
export const actions = {
  getProducts ({ commit }) {
    this.$axios.$get(`${process.env.baseURL}/product.json`)
      .then((response) => {
        const productsArray = []
        for (const key in response) {
          productsArray.push({
            ...response[key],
            id: key
          })
        }
        commit('SET_PRODUCTS', productsArray)
      })
  },
  getProduct ({ commit }, productId) {
    this.$axios.$get(`${process.env.baseURL}/product/${productId}.json`)
      .then((respone) => {
        commit('SET_PRODUCT', respone)
      })
  },
  addProductToCart ({ commit }, { product, quantity }) {
    commit('ADD_TO_CART', { product, quantity })
    this.$axios.$post(`${process.env.baseURL}/cart.json`, {
      product_id: product.id,
      cardprice: product.price * quantity,
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      },
      quantity
    })
  },

  getCartItems ({ commit }) {
    this.$axios.$get(`${process.env.baseURL}/cart.json`).then(
      (respone) => {
        const cartArray = []
        for (const key in respone) {
          cartArray.push({ ...respone[key], id: key })
        }
        commit('SET_CART', cartArray)
      })
  },
  removeProduct ({ commit }, product) {
    commit('REMOVE_PRODUCT', product)
    this.$axios.$delete(`${process.env.baseURL}/cart/${product.id}.json`)
  },
  clearCart ({ commit }) {
    commit('CLEAR_CART')
    this.$axios.$delete(`${process.env.baseURL}/cart.json`)
  },
  deleteProduct ({ commit }, item) {
    commit('DELETE_PRODUCT', item)
    this.$axios.$delete(`${process.env.baseURL}/product/${item.id}.json`)
  },
  getOrders ({ commit }) {
    this.$axios.get(`${process.env.baseURL}/order.json`)
      .then((response) => {
        const orderArray = []
        for (const key in response.data) {
          orderArray.push({ ...response.data[key], id: key })
        }
        commit('SET_ORDERS', orderArray)
      })
  },
  getdataUser ({ commit }, idToken) {
    this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.fbApiKey}&idToken=${idToken}`)
      .then((response) => {
        commit('SET_USER', response)
      })
  },
  authenticateUser (vuexContext, credentials) {
    return new Promise((resolve, reject) => {
      let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`
      if (!credentials.isLogin) {
        authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
      }
      this.$axios.$post(authUrlApi, {
        email: credentials.email,
        password: credentials.password,
        role: credentials.role,
        returnSecureToken: true
      }).then((result) => {
        vuexContext.commit('setRole', result.localId)
        vuexContext.commit('setToken', result.idToken)
        localStorage.setItem('token', result.idToken)
        // token exp khoang thoi gian het han
        localStorage.setItem('tokenExpiration', new Date().getTime() + result.expiresIn * 1000)
        Cookies.set('token', result.idToken)
        Cookies.set('tokenExpiration', result.idToken)
        // expiresIn thoi han bao lau
        vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
        resolve({ success: true })
      }).catch((e) => {
        console.log(e)
        reject(e.response)
      })
    })
  },
  setLogoutTimer (vuexContext, duration) {
    setTimeout(() => {
      vuexContext.commit('clearToken')
    }, duration)
  },
  initAuth (vuexContext, req) {
    let token, tokenExpiration
    if (req) {
      // xu ly lan dau load trang
      if (!req.headers.cookie) {
        return false
      }
      const tokenKey = req.headers.cookies.split(';').find(c => c.trim().startsWith('token='))
      const tokenExpirationKey = req.header.cookie.split('j').find(c => c.trim().startsWith('tokenExpiration'))
      if (!tokenKey || !tokenExpiration) {
        vuexContext.dispatch('logout')
        return false
      }
      token = tokenKey.split('=')[1]
      tokenExpiration = tokenExpirationKey.split('=')[1]
    } else {
      token = localStorage.getItem('token')
      tokenExpiration = localStorage.getItem('tokenExpiration')
      if (new Date().getTime() > tokenExpiration || !token) {
        vuexContext.dispatch('logout')
        return false
      }
    }
    vuexContext.dispatch('setLogoutTimer', tokenExpiration - new Date().getTime())
    vuexContext.commit('setToken', token)
  },
  logout (vuexContext) {
    vuexContext.commit('clearToken')
    Cookies.remove('token')
    Cookies.remove('tokenExpiration')
    localStorage.removeItem('item')
    localStorage.removeItem('tokenExpiration')
  }
}
