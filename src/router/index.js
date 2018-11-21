import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import DragonCreate from '@/components/DragonCreate'
import AddAppearance from '@/components/AddAppearance'
import NotFound from '@/components/NotFound'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/creer-dragon',
      name: 'dragon-create',
      component: DragonCreate
    },
    {
      path: '/ajouter-couleur',
      name: 'appearance-create',
      component: AddAppearance
    },
    {
      path: '/404', component: NotFound
    },
    {
      path: '*', redirect: '/404'
    }
  ]
})
