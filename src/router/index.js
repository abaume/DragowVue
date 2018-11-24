import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import DragonCreate from '@/components/pages/first_dragon/DragonCreate'
import AddAppearance from '@/components/pages/administration/AddAppearance'
import AddRace from '@/components/pages/administration/AddRace'
import NotFound from '@/components/pages/NotFound'

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
      path: '/ajouter-race',
      name: 'race-create',
      component: AddRace
    },
    {
      path: '*', component: NotFound
    }
  ]
})
