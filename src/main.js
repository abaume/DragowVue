// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

window.axios = axios
window.axios.defaults.baseURL = window.API_SERVER_URL
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = window.API_SERVER_URL
window.axios.defaults.withCredentials = true
window.assets = './../assets/'

const token = localStorage.getItem('user-token')
if (token) {
  window.axios.defaults.headers.common['Authorization'] = token
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
