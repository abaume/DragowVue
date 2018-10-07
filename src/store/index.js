import Vue from 'vue'
import Vuex from 'vuex'
import dragonCreate from './modules/DragonCreate'
import addAppearance from './modules/AddAppearance'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dragonCreate,
    addAppearance
  },
  strict: process.env.NODE_ENV !== 'production'
})
