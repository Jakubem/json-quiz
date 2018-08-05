<template>
    <p>
        ciastko
    </p>
</template>

<script>
//   import SingleCard from './SingleCard.vue';
  export default {
    components: {
        // 'single-card': SingleCard,
    },
    mounted: async function() {
    // change to questions
    const data = await fetch("./episode.json");
    const allEpisodes = await data.json();
    this.episodes = allEpisodes.episodes
    },
    methods: {
    },
    data () {
        return {
          episodes: [],
          // test episodes
        }
      },
}
</script>
<style>

</style>