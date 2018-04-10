import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

//для взаимодействия админки и проекта
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
