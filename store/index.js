import Cookie from 'cookie'

// CLASSIC MODE
/*
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: ...,
    mutations: ...,
    actions: ...
}

export default createStore
*/

// MODULES MODE
export const state = () => ({})

// Special Nuxt method called once on app initialization (only in index)
export const actions = {
  nuxtServerInit ({ dispatch }, { req }) {
    const cookies = Cookie.parse(req.headers.cookie || '')
    const token = cookies['token'] || ''
    if (token) return dispatch('user/load', token)
  }
}