<template>
  <div class="header_margin"></div>

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
.header_margin {
  height: 1px;
  width: 1px;
  margin-bottom: 3em;
}

h1 {
  color : #FFF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
