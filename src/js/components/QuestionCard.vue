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
  @import '../../css/_var.scss';
  .option {
    height: 90px;
    width: 250px;
    border: none;
    border-radius: 3px;
    background-color: $c-purple-light;
    margin: 10px;
    padding: 0;
    font: $f-option;
    color: $c-black;
    box-shadow: 0px 3px 10px -6px rgba(0,0,0,0.4);
    transition: box-shadow .2s;
    overflow-wrap: break-word;
    box-sizing: border-box;
    &[aria-checked="true"] {
      background-color: $c-purple;
      color: $c-white;
    }
  }
    .question {
    text-align: center;
    background-color: $c-white;
    margin: 10px;
    padding: 10px;
    height: 150px;
    font: $f-question;
  }
  .next {
    float: right;
    background-color: $c-green;
    height: 50px;
    border-radius: 50px;
  }

  .option:hover {
    box-shadow: 0px 4px 15px -6px rgba(0, 0, 0, 0.5);
  }
</style>