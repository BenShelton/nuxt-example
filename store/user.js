export const state = () => ({
  _id: 0,
  name: '',
  token: ''
})

export const actions = {

  load ({ commit }, token) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('update', { _id: 1, name: 'Ben', token })
        resolve()
      }, 1000)
    })
  }

}

export const mutations = {
  update (state, user) {
    Object.assign(state, user)
  }
}