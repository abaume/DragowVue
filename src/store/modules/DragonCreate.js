import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  races: [],
  genders: [],
  colors: [],
  selected: {
    selectedRace: '',
    selectedGender: '',
    selectedColor: ''
  },
  dragon: {
    name: '',
    gender: '',
    race: ''
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
  }
}

// actions
const actions = {
  loadRaces ({commit}) {
    axios
      .get('http://127.0.0.1:8000/api/races').then(
        response => {
          commit('setRaces', response.data)
        })
      .catch(e => {
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
