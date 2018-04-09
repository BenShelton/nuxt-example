export const state = () => ({
  _id: 0,
  title: 'Unknown',
  price: 0
})

export const actions = {

  // Initial Load Action
  load ({ commit }) {
    setTimeout(
      commit,
      1000,
      'update',
      { _id: 1, title: 'Product', price: 99.99 }
    )
  },

  // Async Load Action
  loadAsync ({ commit }) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('update', { _id: 1, title: 'Product', price: 99.99 })
        resolve()
      }, 1000)
    })
  }
}

export const mutations = {
  update (state, product) {
    Object.assign(state, product)
  },
  reset (state) {
    Object.assign(state, {
      _id: 0,
      title: 'Unknown',
      price: 0
    })
  }
}