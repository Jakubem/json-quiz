import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

import allQuestions from './questions.json'

Vue.use(Vuex)

const state = {
  correct: 0,
  questionsNo: 0,
  all: allQuestions.questions.length,
  questions: allQuestions.questions,
}

const mutations = {
  correctAnwser (state, n) {
    state.correct += n
  },
  questionNo (state) {
    state.questionNo++
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  // plugins: [vuexLocal.plugin]
})