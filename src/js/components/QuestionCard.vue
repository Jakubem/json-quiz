<template>
  <div class="question-wrapper">
    <p class="question">
      {{ question.question }}
    </p>
    <options :options="question.options">
    </options>
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

</style>