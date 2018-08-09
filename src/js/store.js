import Vue from 'vue'
import Vuex from 'vuex'

import allQuestions from './questions.json'

Vue.use(Vuex)

const state = {
  correct: 0,
  wrong: 0,
  all: allQuestions.questions.length
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