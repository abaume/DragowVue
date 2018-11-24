import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  name: '',
  statistics: {
    strength: 1,
    resistance: 1,
    intelligence: 1,
    speed: 1,
    discretion: 1
  },
  loading: {
    insertRace: false
  }
}

// getters
const getters = {
  getName (state) {
    return state.name
  },
  getStats (state) {
    return state.statistics
  },
  getLoading (state) {
    return state.loading
  }
}

// mutations
const mutations = {
  setName (state, val) {
    state.name = val
  },
  setStats (state, {prop, val}) {
    state.statistics[prop] = val
  },
  setLoadingProperty (state, {prop, val}) {
    state.loading[prop] = val
  }
}

// actions
const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
