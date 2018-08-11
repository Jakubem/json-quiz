import Vue from 'vue';
import VueRouter from 'vue-router';
import '../css/style.scss';

import Start from './pages/Start.vue';
import Quiz from './pages/Quiz.vue';
import End from './pages/End.vue';
import NotFound from './pages/404.vue';


import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: Start },
    { path: '/quiz', component: Quiz },
    { path: '/score', component: End }
  ]
})

new Vue({
  el: '#app',
  store,
  router,
  comments: {
    Start,
    Quiz,
    End
  }
})
