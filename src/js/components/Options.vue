<template>
  <div class="options-wrapper">
    <div class="options-row">
      <button class="option">
        {{ options[0] }}
      </button>
      <button class="option">
        {{ options[1] }}
      </button>
    </div>
    <div class="options-row">
      <button class="option">
        {{ options[2] }}
      </button>
      <button class="option">
        {{ options[3] }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
        return {
        }
    },
    props: ['options']
}
</script>

<style lang="scss">
  @import '../../css/_var.scss';
  .option {
    height: 60px;
    width: 160px;
    border: none;
    border-radius: 2px;
    background-color: $c-purple-light;
    margin: 10px;
    font-family: 'Do Hyeon', sans-serif;
    font-size: 25px;
    color: $c-black;
    box-shadow: 0px 3px 10px -6px rgba(0,0,0,0.4);
    transition: box-shadow .2s;
    overflow-wrap: break-word;
  }
  .option:hover {
    box-shadow: 0px 4px 15px -6px rgba(0, 0, 0, 0.5);
  }
</style>