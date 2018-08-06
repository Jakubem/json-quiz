<template>
  <div>
    <options :options="question[0].options">
    </options>
  </div>
</template>

<script>
  import Options from './Options.vue';
  export default {
    components: {
      Options,
    },
    created: async function() {
    const data = await fetch("./questions.json");
    const allQuestions = await data.json();

    const currentQuestion = allQuestions.questions
    this.question = currentQuestion;
    },
    methods: {
    },
    data () {
        return {
          question: [],
        }
      },
}
</script>
<style>

</style>