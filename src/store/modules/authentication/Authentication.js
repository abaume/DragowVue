import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  token: localStorage.getItem('user-token') || '',
  status: ''
}

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}

const mutations = {
  AUTH_REQUEST: (state) => {
    state.status = 'loading'
  },
  AUTH_SUCCESS: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  AUTH_ERROR: (state) => {
    state.status = 'error'
  }
}

const actions = {
  REGISTER_REQUEST: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => { // The Promise used for router redirect in login
      commit('AUTH_REQUEST')
      window.axios.post('/register', {
        email: user.email,
        password: user.password,
        name: user.name
      })
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('user-token', token) // store the token in localstorage
          commit('AUTH_SUCCESS', token)
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR', err)
          localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
          reject(err)
        })
    })
  },
  AUTH_REQUEST: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => { // The Promise used for router redirect in login
      commit('AUTH_REQUEST')
      window.axios.post('/login', {
        email: user.email,
        password: user.password
      })
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('user-token', token) // store the token in localstorage
          commit('AUTH_SUCCESS', token)
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR', err)
          localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
          reject(err)
        })
    })
  },
  AUTH_LOGOUT: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit('AUTH_LOGOUT')
      localStorage.removeItem('user-token')
      // remove the axios default header
      delete window.axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
