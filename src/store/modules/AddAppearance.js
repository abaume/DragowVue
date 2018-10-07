import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  races: [],
  appearance: {
    race: '',
    colorName: '',
    colorImg: ''
  },
  loading: {
    race: false
  }
}

// getters
const getters = {
  getRaces (state) {
    return state.races
  },
  getLoading (state) {
    return state.loading
  }
}

// mutations
const mutations = {
  setRaces (state, val) {
    state.races = val
  },
  setLoadingProperty (state, {prop, val}) {
    state.loading[prop] = val
  }
}

// actions
const actions = {
  loadRaces ({commit}) {
    return new Promise((resolve, reject) => {
      commit('setLoadingProperty', {prop: 'race', val: true})
      window.axios
        .get('/races')
        .then(
          response => {
            commit('setRaces', response.data)
            commit('setLoadingProperty', {prop: 'race', val: false})
            resolve()
          })
        .catch(e => {
          commit('setLoadingProperty', {prop: 'race', val: false})
          reject(e)
        })
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
