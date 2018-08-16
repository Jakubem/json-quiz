<template>
  <div class="main-wrapper">
    <h1 class="headline">
      Your score:
    </h1>
    <div class="score">
      {{`${score}/${all}`}}
    </div>
    <button @click="reset" class="start-a">Play again</button>
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
    methods: {
      reset() {
        this.$store.state.correct = 0;
        this.$store.state.questionsNo = 0;
        this.$router.push('/');
      }
    }
  }
</script>
<style lang="scss">
  @import '../../css/_var.scss';

</style>