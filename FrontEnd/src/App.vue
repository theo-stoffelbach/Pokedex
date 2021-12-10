<template>
  <Header />
 
</template>

<script>

import Header from "./components/Header_copy.vue";

export default {
  name: "App",
  components: {
    Header,

    // PokemonSearch,

    // PokemonList,

    // PokemonDetail
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
