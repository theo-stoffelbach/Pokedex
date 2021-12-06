<template>
  <body
    v-for="(pokemons_detail, index) in pokemons_details"
    :key="'poke' + index"
  >
    <div class="grid test">
      <div class="cartes">
        <img :src="pokemons_detail[1] + '.png'" class="pokemon_image" />
        <a @click="test" class="Read-more"> Read more </a>
      </div>
      <div class="cartes">
            <h1 class="title">{{ pokemons_detail[0].forms[0].name }}</h1>
            <p class="Text">Weight : {{pokemons_detail[0].weight}} kg</p>
            <p class="Text">Height : {{pokemons_detail[0].height}}0 cm</p>
            <p class="Text">Types : {{pokemons_detail[0].height}}0 cm</p>
            <p class="Text">Weakness : {{pokemons_detail[0].height}}0 cm</p>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Team_pok",
  props: ["name_pokemon"],
  data: () => {
    return {
      pokemons_details: [],
    };
  },
  methods: {
    test() {
      console.log(this.pokemons_details[0].forms[0].name);
    },
  },
  mounted() {
    let url = "https://pokeapi.co/api/v2/pokemon/" + this.name_pokemon;
    let req = new Request(url);
    fetch(req)
      .then((resp) => {
        if (resp.status === 200) return resp.json();
      })
      .then((data) => {
        let push_pokemon = [];

        push_pokemon.push(data);

        let id = data.id.toString();

        if (id.length == 1) id = "00" + id;
        if (id.length == 2) id = "0" + id;

        let image_url =
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id;

        push_pokemon.push(image_url);

        console.log(push_pokemon);

        this.pokemons_details.push(push_pokemon);
      });
  },
};
</script>

<style>
.title {
    margin: 25px 0;
    text-decoration: underline;
}

h1 {
    font-size: 42px;
    color: rgb(0, 0, 88);
}

.Text {
    margin: 10px 0;
    font-size: 34px;
    color: rgb(0, 0, 88);

}

.pokemon_image {
    margin: 25px;
    width: 400px;
}

.grid {
background: blueviolet;

  max-width: 1500px;
  width: 90%;
  height: auto;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 600px);
  grid-gap: 25px;
  justify-content: center;
}

.cartes {
    margin: 25px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);

  position: relative;
  height: auto;
  min-width: 600px;
}

.Read-more {
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 24px;

  height: 75px;
  width: 202px;
  border-radius: 20px;
  border: 3px solid red;
  background: transparent;

  margin-bottom: 50px;
}
</style>
