import Vue from 'vue';
import '../css/style.scss';

import Start from './components/pages/Start.vue';
import Quiz from './components/pages/Quiz.vue';
import NotFound from './components/pages/404.vue';

import routes from './routes.js';

const app = new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  mounted: function() {
    console.log(this.currentRoute);
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})

