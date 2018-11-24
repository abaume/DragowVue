import Vue from 'vue'
import Vuex from 'vuex'
import dragonCreate from './modules/DragonCreate'
import addAppearance from './modules/administration/AddAppearance'
import addRace from './modules/administration/AddRace'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dragonCreate,
    addAppearance,
    addRace
  },
  strict: process.env.NODE_ENV !== 'production'
})
