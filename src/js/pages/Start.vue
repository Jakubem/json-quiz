<template>
  <p>
    <vue-qr :bgSrc='src' :logoSrc="src2" text="Hello world!" :size="200"></vue-qr>
    <vue-qr text="Hello world!" :callback="test" qid="testid"></vue-qr>
  </p>
</template>

<script>
  import VueQr from 'vue-qr'
  export default {
    components: {
      VueQr,
    },
    methods: {
      test(dataUrl,id){
          console.log(url, id)
      }
    },
    data () {
      return {
      }
    },
  }
</script>
<style>

</style>