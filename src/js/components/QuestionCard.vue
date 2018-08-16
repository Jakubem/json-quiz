<template>
  <div class="question-wrapper">
    <status />
    <p class="question">
      {{ current.question }}
    </p>
    <div class="options-wrapper">
      <div class="options-row">
        <question-button :obj="current.options[0]" @optionPicked="handleOptionPicked"/>
        <question-button :obj="current.options[1]" @optionPicked="handleOptionPicked"/>
      </div>
      <div class="options-row">
        <question-button :obj="current.options[2]" @optionPicked="handleOptionPicked"/>
        <question-button :obj="current.options[3]" @optionPicked="handleOptionPicked"/>
      </div>
    </div>
  </div>
</template>

<script>
  // import questions from '../questions.json';
  import { mapMutations, mapGetters } from 'vuex';
  import QuestionButton from './QuestionButton.vue';
  import Status from './Status.vue';
  export default {
    components: {
      QuestionButton,
      Status
    },
    data () {
      return {
        question: this.$store.state.questions,
        all: this.$store.state.all
      }
    },
    computed: {
      score() {
        return this.$store.state.correct;
      },
      currentNo() {
        return this.$store.state.questionsNo;
      },
      current() {
        return this.question[this.currentNo];
      },
    },
    methods: Object.assign(
      {},
      mapMutations([
        'correctAnwser',
        'nextNo',
      ]),
      {
        handleOptionPicked: function (picked) {
            (picked === this.current.answer) 
              ? this.correctAnwser(1) 
              : this.correctAnwser(0);
            this.nextNo()
            // pls fix
            if (this.currentNo >= this.all) {
              this.$router.push('/score');
            }
        },
      }
    ),
}
</script>

<style lang="scss">

</style>