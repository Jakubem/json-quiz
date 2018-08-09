import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  correct: 15,
  wrong: 15,
  all: 15
}

const mutations = {
  correctAnwser (state) {
    state.correct++
  },
  decrement (state) {
    state.wrong--
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})