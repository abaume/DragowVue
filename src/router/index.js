import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import DragonCreate from '@/components/pages/first_dragon/DragonCreate'
import AddAppearance from '@/components/pages/administration/AddAppearance'
import AddRace from '@/components/pages/administration/AddRace'
import NotFound from '@/components/pages/NotFound'
import Index from '@/components/pages/Index'
import Login from '@/components/pages/authentication/Login'
import Register from '@/components/pages/authentication/Register'

Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*', component: NotFound
    }
  ]
})
