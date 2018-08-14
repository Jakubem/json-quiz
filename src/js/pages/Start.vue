<template>
  <div class="main-wrapper">
    <router-link to="/quiz" class="start-a">Start Quiz</router-link>
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
        PageUrl: `${window.location.href}#quiz`,
        Dark: '#6013cc'
      }
    },
  }
</script>
<style lang="scss">
  @import '../../css/_var.scss';
  .qr-vue {
    box-shadow: 0px 4px 25px -5px rgba(0, 0, 0, 0.6);
    width: 400px;
    height: 400px;
  }
</style>