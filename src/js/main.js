import Vue from 'vue';
import '../css/style.scss';

import Start from './pages/Start.vue';
import Quiz from './pages/Quiz.vue';
import End from './pages/End.vue';
import NotFound from './pages/404.vue';

import store from './store'

// todo: add node server fallback for 404s
const routes = {
  '/': Start,
  '/quiz': Quiz,
  '/score': End
}

new Vue({
  el: '#app',
  store,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
