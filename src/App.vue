<template>
  <Header />

  <h1>DDEDED</h1>

  <PokemonList :imageUrl="imageUrl" :apiUrl="apiUrl" />
</template>

<script>
import Header from './components/page/Header.vue';
// import PokemonSearch from './pokemonSearch.vue'


import PokemonList from "./components/pokemon/PokemonList.vue";


// import PokemonDetail from './pokemonDetail.vue'

export default {
  data: () => {
    return {
      imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
    };
  },
  name: "App",
  components: {
    Header,
    // PokemonSearch,

    PokemonList,

    // PokemonDetail

  },
};
</script>

<style>

* {
  margin: 0;
  padding:0;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: #445aaa40;
}

.carte {
  margin: 20px;
  margin-bottom: 50px;
}

.card {
  border: 0 solid #fff;
  border-radius: 25px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.card i {
  position: absolute;
  top: 20px;
  left: -15px;
  width: 80%;
  height: 50px;
  background: #d10000;
  border-radius: 30px;
  border-bottom-left-radius: 0;

  display: flex;
  align-items: center;
  padding-left: 25px;
}

.card i::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50px;
  width: 15px;
  height: 30px;
  background-color: #680000;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  z-index: 2;
}

.card i::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50px;
  width: 15px;
  height: 15px;
  background: #d10000;
}

.pokemon {
  margin-top: 60px;
  border: #2c3e50 solid saddlebrown;
}

.pokemon_img {
  display: flex;
  justify-content: center;
}

h5 {
  color: white;
  font-style: normal;
}

.col-lg-4 .card {
  background: linear-gradient(#d0141460, #d0141420);
}

.cartee {
  padding-top: 50px;
}
</style>
