import Vue from 'vue'
import Vuex from 'vuex'
import dragonCreate from './modules/DragonCreate'
import addAppearance from './modules/administration/AddAppearance'
import addRace from './modules/administration/AddRace'
import authentication from './modules/authentication/Authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dragonCreate,
    addAppearance,
    addRace,
    authentication
  },
  strict: process.env.NODE_ENV !== 'production'
})
