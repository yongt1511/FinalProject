
export const state = () => ({
  products: [],
  product: null,
  cart: [],
  quantity: 1
})
export const getters = {
  quantity: (state) => {
    return state.quantity
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
  increment (state) {
    state.quantity++
  },
  decrement (state) {
    if (state.quantity > 1) {
      state.quantity--
    }
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
  }
  // SET_CART (state, itemCards) {
  //   state.cart = itemCards
  // }

}
export const actions = {
  addProductToCart ({ commit }, { product, quantity }) {
    commit('ADD_TO_CART', { product, quantity })
    this.$axios.$post('http://localhost:3004/cart', {
      product_id: product.id,
      quantity
    })
  },
  getCartItems ({ commit }) {
    this.$axios.$get('http://localhost:3004/cart')
      .then((response) => {
        console.log(response)
        commit('SET_CART', response.data)
      })
  }
}
