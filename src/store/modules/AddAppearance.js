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
    insertColor: false
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
  },
  addAppearance ({state, commit}) {
    return new Promise((resolve, reject) => {
      commit('setLoadingProperty', {prop: 'insertColor', val: true})
      let formData = new FormData()
      formData.append('image', state.appearance.colorImg)
      formData.append('race', state.appearance.race)
      formData.append('name', state.appearance.colorName)
      window.axios.post('/appearances/', {
        race: state.appearance.race,
        color: state.appearance.colorName
      })
        .then(response => {
          if (response.statusText === 'already exist') {
            console.log('already exist')
          } else {
            console.log('tout va bien')
            window.axios.post('/appearances/image',
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              })
              .then(() => {
                resolve()
              })
              .catch(e => {
                reject(e)
              })
          }
          commit('setLoadingProperty', {prop: 'insertColor', val: false})
          resolve()
        })
        .catch(error => {
          commit('setLoadingProperty', {prop: 'insertColor', val: false})
          reject(error)
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
