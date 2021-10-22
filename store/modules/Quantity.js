const state = {
  quantity: 0
}
const getters = {
  Quantity: (state) => {
    return state.quantity
  }
}
const mutations = {
  increment (state) {
    state.quantity++
  },
  decrement (state) {
    state.quantity--
  }

}
export default {
  state, getters, mutations
}
