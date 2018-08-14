<template>
  <div class="question-wrapper">
    <p class="question">
      {{ question.question }}
    </p>
    <div class="options-wrapper">
      <div class="options-row">
        <button v-if="question" class="option">
          {{ question[0] }}
        </button>
        <button v-if="question" class="option">
          {{ question[1] }}
        </button>
      </div>
      <div class="options-row">
        <button v-if="question" class="option">
          {{ question[2] }}
        </button>
        <button v-if="question" class="option">
          {{ question[1] }}
        </button>
      </div>
    </div>
    <button class="option next" @click="correctAnwser(1)">dalej ></button>
  </div>
</template>

<script>
  import questions from '../questions.json';
  import { mapMutations } from 'vuex';
  export default {
    mounted: function() {
    // const currentQuestion = questions.questions[1]
    // this.question = currentQuestion;
    },
    methods: {
    },
    data () {
      return {
        question: this.$store.state.questions
      }
    },
    computed: {
      score() {
        return this.$store.state.correct;
      },
    },
    methods: mapMutations([
      'correctAnwser',
      'getQuestion',
    ]),
}
</script>

<style lang="scss">
  @import '../../css/_var.scss';
  .option {
    height: 60px;
    width: 250px;
    border: none;
    border-radius: 2px;
    background-color: $c-purple-light;
    margin: 10px;
    padding: 0;
    font: $f-option;
    color: $c-black;
    box-shadow: 0px 3px 10px -6px rgba(0,0,0,0.4);
    transition: box-shadow .2s;
    overflow-wrap: break-word;
    box-sizing: border-box;
  }

  .next {
    float: right;
  }

  .option:hover {
    box-shadow: 0px 4px 15px -6px rgba(0, 0, 0, 0.5);
  }
</style>