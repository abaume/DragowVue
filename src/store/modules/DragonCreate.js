import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  races: [],
  genders: [],
  colors: [],
  selected: {
    selectedRace: 'bb1af05a-68a3-4de6-978c-c069101926c2',
    selectedGender: '',
    selectedColor: ''
  },
  dragon: {
    name: '',
    gender: '',
    race: '',
    color: ''
  },
  loading: {
    race: false,
    color: false
  }
}

// getters
const getters = {
  getRaces (state) {
    return state.races
  },
  getGenders (state) {
    return state.genders
  },
  getColors (state) {
    return state.colors
  },
  getDragon (state) {
    return state.dragon
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
  setColors (state, val) {
    state.colors = val
  },
  setGenders (state, val) {
    state.genders = val
  },
  setSelectedProp (state, {prop, val}) {
    state.selected[prop] = val
  },
  setDragonProperty (state, {prop, val}) {
    state.dragon[prop] = val
  },
  setLoadingProperty (state, {prop, val}) {
    state.loading[prop] = val
  }
}

// actions
const actions = {
  loadRaces ({commit}) {
    commit('setLoadingProperty', {prop: 'race', val: true})
    window.axios
      .get('/races')
      .then(
        response => {
          commit('setRaces', response.data)
          commit('setLoadingProperty', {prop: 'race', val: false})
        })
      .catch(e => {
        commit('setLoadingProperty', {prop: 'race', val: false})
      })
  },
  loadAppearance ({commit, state}) {
    commit('setLoadingProperty', {prop: 'color', val: true})
    window.axios
      .get('/appearances/' + state.selected.selectedRace)
      .then(
        response => {
          commit('setColors', response.data.data)
          commit('setLoadingProperty', {prop: 'color', val: false})
        })
      .catch(e => {
        commit('setLoadingProperty', {prop: 'color', val: false})
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
