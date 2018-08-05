<template>
  <div>
    <p v-for="question in questions">
      {{ question }}
    </p>
  </div>
</template>

<script>
//   import SingleCard from './SingleCard.vue';
  export default {
    components: {
        // 'single-card': SingleCard,
    },
    mounted: async function() {
    // change to questions
    const data = await fetch("./questions.json");
    const allQuestions = await data.json();
    this.questions = allQuestions.questions
    },
    methods: {
    },
    data () {
        return {
          questions: [],
        }
      },
}
</script>
<style>

</style>