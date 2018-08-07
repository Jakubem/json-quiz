<template>
  <div class="main-view">
    <div class="question-wrapper">
      <p class="question">
        {{ question.question }}
      </p>
      <options :options="question.options">
      </options>
    </div>
  </div>
</template>

<script>
  import questions from '../questions.json';
  import Options from './Options.vue';
  export default {
    components: {
      Options,
    },
    mounted: function() {
    const currentQuestion = questions.questions[1]
    this.question = currentQuestion;
    },
    methods: {
    },
    data () {
      return {
        question: [],
      }
    },
    props: ['options']
}
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .main-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .question {
    text-align: center;
    background-color: $c-white;
    margin: 10px;
    padding: 10px;
    height: 100px;
    font: $f-question;
  }

  // .question-wrapper {
  // }
</style>