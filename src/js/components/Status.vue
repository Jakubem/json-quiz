<template>
  <div class="question-status">
    <h2 class="question-status-number">
      {{ `${currentNo + 1}/${all}` }}
    </h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        all: this.$store.state.all
      }
    },
    computed: {
      currentNo() {
        return this.$store.state.questionsNo;
      },
    }
  }
</script>

<style lang="scss">
  @import '../../css/_var.scss';
  .question-status {
    width: 40px;
    height: 40px;    
    background: $c-green;
    border-radius: 50%;
    padding: 5px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .question-status-number {    
    // text-align: center;
    font: $f-h2;
  }
</style>
