import Vue from 'vue';
import '../css/style.scss';

import Start from './pages/Start.vue';
import Quiz from './pages/Quiz.vue';
import NotFound from './pages/404.vue';

// import routes from './routes.js';

const routes = {
  '/': Start,
  '/quiz': Quiz
}

new Vue({
  el: '#app',
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
