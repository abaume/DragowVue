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

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        auth: undefined
      }
    },
    {
      path: '/creer-dragon',
      name: 'dragon-create',
      component: DragonCreate,
      meta: {
        auth: true
      }
    },
    {
      path: '/ajouter-couleur',
      name: 'appearance-create',
      component: AddAppearance,
      meta: {
        auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
      }
    },
    {
      path: '/ajouter-race',
      name: 'race-create',
      component: AddRace,
      meta: {
        auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        auth: false
      }
    },
    {
      path: '*', component: NotFound
    }
  ]
})
