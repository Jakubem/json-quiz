<template>
  <div class="main-wrapper">
    <h1 class="headline">
      Your score:
    </h1>
    <div class="score">
      {{`${score}/${all}`}}
    </div>
    <a href="/quiz" class="start-a">Play again</a>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    components: {
    },
    data () {
      return {
      }
    },
    computed: {
      score() {
        return this.$store.state.correct;
      },
      question() {
        return this.$store.state.questions;
      },
      all() {
        return this.$store.state.all;
      },
    },
    methods: mapMutations([
      'correctAnwser',
      'getQuestion',
    ])

    
  }
</script>
<style lang="scss">
  @import '../../css/_var.scss';

</style>