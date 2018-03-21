export const state = () => ({
  _id: 0,
  title: 'Unknown',
  price: 0
})

export const actions = {
  load ({ commit }) {
    setTimeout(
      commit,
      1000,
      'update',
      { _id: 1, title: 'Product', price: 99.99 }
    )
  }
}

export const mutations = {
  update (state, product) {
    Object.assign(state, product)
  }
}