<template>
  <div class="main-wrapper">
    <h1 class="headline">
      Your score:
    </h1>
    <div class="score">
      {{`${$store.state.correct}/${$store.state.all}`}}
    </div>
    <a href="/quiz" class="start-a">Play again</a>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
      }
    },
  }
</script>
<style lang="scss">
  @import '../../css/_var.scss';

</style>