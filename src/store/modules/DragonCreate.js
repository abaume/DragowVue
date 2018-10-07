import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  races: [],
  genders: [],
  colors: [],
  dragonToPath: {
    dragonToPathRace: '',
    dragonToPathColor: ''
  },
  dragon: {
    name: '',
    gender: 'male',
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
  getDragonToPath (state) {
    return state.dragonToPath
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
  setDragonToPathProp (state, {prop, val}) {
    state.dragonToPath[prop] = val
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
    return new Promise((resolve, reject) => {
      commit('setLoadingProperty', {prop: 'race', val: true})
      window.axios
        .get('/races')
        .then(
          response => {
            commit('setRaces', response.data)
            commit('setDragonProperty', {prop: 'race', val: response.data[0].id})
            commit('setDragonToPathProp', {prop: 'dragonToPathRace', val: response.data[0].name})
            commit('setLoadingProperty', {prop: 'race', val: false})
            resolve()
          })
        .catch(e => {
          commit('setLoadingProperty', {prop: 'race', val: false})
          reject(e)
        })
    })
  },
  loadAppearance ({commit, state}) {
    return new Promise((resolve, reject) => {
      commit('setLoadingProperty', {prop: 'color', val: true})
      window.axios
        .get('/appearances/' + state.dragon.race)
        .then(
          response => {
            commit('setColors', response.data.data)
            commit('setDragonProperty', {prop: 'color', val: response.data.data[0].color.id})
            commit('setDragonToPathProp', {prop: 'dragonToPathColor', val: response.data.data[0].color.name})
            commit('setDragonToPathProp', {prop: 'dragonToPathRace', val: response.data.data[0].race.name})
            commit('setLoadingProperty', {prop: 'color', val: false})
            resolve()
          })
        .catch(e => {
          commit('setLoadingProperty', {prop: 'color', val: false})
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
