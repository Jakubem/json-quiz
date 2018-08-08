<template>
  <div class="start-wrapper">
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
<style>
  .start-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>