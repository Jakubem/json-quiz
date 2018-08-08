<template>
  <div class="start-wrapper">
    <a href="/quiz" class="start-a">Start Quiz</a>
    <vue-qr 
      class="qr-vue"
      :text="PageUrl"
      :colorDark="Dark"
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
        Dark: '#6013cc'
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
    margin-bottom: 40px;
    padding: 15px 35px;
    border-radius: 50px;
    font: $f-a;
    text-decoration: none;
    color: $c-white;
    background-color: $c-black;
    text-align: center;
    
    &:hover {
      background-color: $c-purple;
    }
  }
  .qr-vue {
    box-shadow: 0px 4px 25px -5px rgba(0, 0, 0, 0.6);
    width: 400px;
    height: 400px;
  }
</style>