import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Route from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Route,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
