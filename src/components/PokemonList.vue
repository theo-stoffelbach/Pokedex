<template>
  <div class="list">
    <article v-for="(pokemon, index) in pokemons"
    :key="'poke'+index">
    <h3>{{ pokemon.name }}</h3>


    <div id="scroll-trigger" ref="infinitescrolltrigger">

        <i class="fas fa-spinner fa-spin"></i>

    </div>

    </article>
  </div>
</template>

<script>
export default {
  props: ["imageUrl", "apiUrl"],
  data: () => {
    return {
      pokemons: [],
      nextUrl: ''
    };
  },
  methods: {
    scrollTrigger() {

    },

    fetchData() {
      let req = new Request(this.apiUrl);
      fetch(req)
      .then((resp) => {
        if (resp.status === 200) 
        console.log(resp)
        return resp.json();
      })
      .then((data) => {
        this.nextUrl = data.next;
        data.results.forEach(pokemon => {
            this.pokemons.push(pokemon);
        });
      })
      .catch((error) => {
          console.log(error);
      })
    },
  },
  created() {
      this.fetchData();
  }
};
</script>