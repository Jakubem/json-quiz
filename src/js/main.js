import Vue from 'vue';
import '../css/style.scss';

import Home from './components/Home.vue';

if (document.getElementById("app")) {
  const app = new Vue({
    el: "#app",
    components: {
      'home': Home,
    },
  })
}