<template>
  <div class="options-wrapper">
    <div class="options-row">
      <button v-if="options" class="option">
        {{ options[0] }}
      </button>
      <button v-if="options" class="option">
        {{ options[1] }}
      </button>
    </div>
    <div class="options-row">
      <button v-if="options" class="option">
        {{ options[2] }}
      </button>
      <button v-if="options" class="option">
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
    width: 250px;
    border: none;
    border-radius: 2px;
    background-color: $c-purple-light;
    margin: 10px;
    padding: 0;
    font: $f-option;
    color: $c-black;
    box-shadow: 0px 3px 10px -6px rgba(0,0,0,0.4);
    transition: box-shadow .2s;
    overflow-wrap: break-word;
    box-sizing: border-box;
  }
  .option:hover {
    box-shadow: 0px 4px 15px -6px rgba(0, 0, 0, 0.5);
  }
</style>