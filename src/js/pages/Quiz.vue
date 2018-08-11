<template>
  <div class="main-view">
    <button @click="correctAnwser(1)">{{ score }}</button>

    <question-card>
    </question-card>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import QuestionCard from '../components/QuestionCard.vue';
  export default {
    components: {
      QuestionCard,
    },
    data () {
      return {
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
    ])
  }
</script>
<style>

</style>