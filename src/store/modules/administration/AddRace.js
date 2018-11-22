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
    
    
  }
  loading: {
    insertRace: false
  }
}

// getters
const getters = {
  getRaces (state) {
    return state.races
  },
  getAppearance (state) {
    return state.appearance
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
  setAppearance (state, {prop, val}) {
    state.appearance[prop] = val
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
