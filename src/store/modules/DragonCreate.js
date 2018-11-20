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
    let colors = []
    state.colors.forEach((color) => {
      if (color.race.id === state.dragon.race) {
        colors.push(color)
      }
    })
    return colors
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
  loadAppearance ({commit, state}) {
    return new Promise((resolve, reject) => {
      commit('setLoadingProperty', {prop: 'color', val: true})
      window.axios
        .get('/appearances')
        .then(
          response => {
            commit('setColors', response.data.data)
            let races = []
            let raceId = []
            response.data.data.forEach((race) => {
              if (raceId.indexOf(race.race.id) === -1) {
                raceId.push(race.race.id)
                races.push(race.race)
              }
            })
            commit('setRaces', races)
            commit('setDragonProperty', {prop: 'color', val: response.data.data[0].color.id})
            commit('setDragonProperty', {prop: 'race', val: response.data.data[0].race.id})
            commit('setDragonToPathProp', {prop: 'dragonToPathColor', val: response.data.data[0].color.name})
            commit('setDragonToPathProp', {prop: 'dragonToPathRace', val: races[0].name})
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
