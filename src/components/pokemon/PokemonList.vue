<template>
  <body>
    <h1>Lorem, ipsum dolor.</h1>
    <div class="grille">
      <article v-for="(pokemon, index) in pokemons" :key="'poke' + index">
        <div class="card item-grey">
          <div class="index_pokemon">
            <p class="index_pokemon_text">{{ pokemon.id }}</p>
          </div>
          <span>
            <h5>{{ pokemon.name }}</h5>
          </span>

          <p>
            <br />{{
              pokemons_details[index].types[0].type.name +
              " , " +
              pokemons_details[index].types[1].type.name
            }}
          </p>

          <div class="pokemon_img">
            <img :src="imageUrl + pokemon.id + '.png'" class="pokemon" />
          </div>

          <div class="container-center" style="background: transparent">
            <a href="#" class="Read-more"> Read more </a>
          </div>
        </div>
      </article>
      <div id="scroll-trigger" ref="infinitescrolltrigger">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  props: ["imageUrl", "apiUrl"],
  data: () => {
    return {
      pokemons: [],
      pokemons_details: [],
      nextUrl: "",
      currentUrl: "",
    };
  },
  methods: {
    fetchData() {
      let req = new Request(this.currentUrl);
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) return resp.json();
        })
        .then((data) => {
          this.nextUrl = data.next;
          data.results.forEach((pokemon) => {
            pokemon.id = pokemon.url
              .split("/")
              .filter(function (part) {
                return !!part;
              })
              .pop();
            let reqq = new Request(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`
            );

            fetch(reqq)
              .then((response) => {
                if (response.status === 200) return response.json();
              })
              .then((detail_pokemon) => {
                if (detail_pokemon.types.length === 1) {
                  detail_pokemon.types.push({type:{name: ""}});
                }
                if (detail_pokemon.types.length === 2) {
                  console.log(`--`);
                }

                // console.log(
                //   `son premier type est ${detail_pokemon.types[0].type.name} et son 2eme type est : ${detail_pokemon.types[1].type.name}`
                // );

                let data_pokemon = {
                  types: detail_pokemon.types,
                };

                this.pokemons_details.push(data_pokemon);
                console.log(this.pokemons_details)
              });

            if (pokemon.id.length == 1) pokemon.id = "00" + pokemon.id;
            if (pokemon.id.length == 2) pokemon.id = "0" + pokemon.id;

            console.log(this.pokemons_details);
            this.pokemons.push(pokemon);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0 && this.nextUrl) {
            this.next();
          }
        });
      });
      observer.observe(this.$refs.infinitescrolltrigger);
    },
    next() {
      this.currentUrl = this.nextUrl;
      this.fetchData();
    },
    setPokemonUrl(url) {
      this.$emit("setPokemonUrl", url);
    },
  },
  created() {
    this.currentUrl = this.apiUrl;
    this.fetchData();
  },
  mounted() {
    this.scrollTrigger();
  },
};
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 50px 0;
}

.grille {
  max-width: 1500px;
  width: 90%;
  height: auto;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-gap: 25px;
  justify-content: center;
}

.card {
  position: relative;
  border-radius: 25px;
  height: auto;
  width: 350px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.card span {
  position: absolute;
  top: 50px;
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

.card span::before {
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

.card span::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50px;
  width: 15px;
  height: 15px;
  background: #d10000;
}

h5 {
  font-size: 22px;
  color: white;
}

.index_pokemon {
  display: flex;
  justify-content: center;
}

.index_pokemon_text {
  position: absolute;
  top: -15px;

  width: 75px;
  background: #d46c6c;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  font-size: 28px;
  color: #b00000;
}

.pokemon {
  margin-top: 110px;
  height: 240px;
  width: 260px;
  padding: 0 25px 25px 0px;
}

.item-grey {
  background: #222;
}

.item-orange {
  background: orange;
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
  cursor: pointer;

  margin-bottom: 50px;
}

.container-center {
  display: flex;
  justify-content: center;
}

a {
  width: 100%;
  height: 100%;

  color: rgb(223, 140, 140);
  text-decoration: none;
}
</style>
