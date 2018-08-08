<template>
  <div class="start-wrapper">
    <a href="/quiz" class="start-a">Start Quiz</a>
    <vue-qr 
      class="qr-vue" 
      :text="PageUrl"
      :size="400">
    </vue-qr>
  </div>
</template>

<script>
  import VueQr from 'vue-qr'
  export default {
    components: {
      VueQr,
    },
    data () {
      return {
        PageUrl: `${window.location.href}quiz`,
      }
    },
  }
</script>
<style lang="scss">
  @import '../../css/_var.scss';
  .start-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 15px -6px rgba(0, 0, 0, 0.5);
  }
  .start-a {
    margin-bottom: 30px;
    padding: 10px 25px;
    border-radius: 50px;
    // width: 100%;
    font: $f-a;
    text-decoration: none;
    color: $c-black;
    background-color: $c-purple-light;
    text-align: center;
  }
  .qr-vue {
    box-shadow: 0px 4px 15px -6px rgba(0, 0, 0, 0.5);
  }
</style>