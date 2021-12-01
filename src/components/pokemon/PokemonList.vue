<template>
  <body>
    <h1>Lorem, ipsum dolor.</h1>
    <div class="grille">
      <article v-for="(pokemon, index) in pokemons" :key="'poke' + index">
        <div class="card item-grey">
          <div class="index_pokemon"><p class="index_pokemon_text">{{pokemon.id}}</p></div>
          <span><h5>{{ pokemon.name }}</h5></span>
          <div class="pokemon_img">
            <img
              :src="imageUrl + pokemon.id + '.png'"
              class="pokemon"
            />
          </div>
          <div class="container-center" style="background: transparent;">
            <button><a href="#" class="Read-more"> Read more </a></button>
          </div>
        </div>
      </article>
            <div id="scroll-trigger" ref="infinitescrolltrigger">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
    </div>
  </body>

  <!-- <body>
    <div class="list">
      <article v-for="(pokemon, index) in pokemons" :key="'poke' + index">
        <img
          :src="imageUrl + pokemon.id + '.png'"
          width="96"
          height="96"
          alt=""
        />
        <h3>{{ pokemon.name }}</h3>
      </article>
      <div id="scroll-trigger" ref="infinitescrolltrigger">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
    </div>
  </body> -->
</template>

<script>
export default {
  props: ["imageUrl", "apiUrl"],
  data: () => {
    return {
      pokemons: [],
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
            if (pokemon.id.length == 1) pokemon.id = "00" + pokemon.id;
            if (pokemon.id.length == 2) pokemon.id = "0" + pokemon.id;
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

// export default {
//   props: ["imageUrl", "apiUrl"],
//   data: () => {
//     return {
//       pokemons: [],
//       nextUrl: "",
//       currentUrl: "",
//     };
//   },
//   methods: {
//     scrollTrigger() {
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.intersectionRatio > 0 && this.nextUrl) {
//             this.next();
//           }
//           console.log(this.apiUrl);
//           console.log("current URL is : " + this.currentUrl);
//           console.log("next URL is : " + this.nextUrl);
//           console.log("______________________________________________");
//         });
//       });

//       observer.observe(this.$refs.infinitescrolltrigger);
//     },
//     next() {
//       this.currentUrl = this.nextUrl;
//       this.fetchData();
//     },

//     fetchData() {
//       let req = new Request(this.currentUrl);
//       fetch(req)
//         .then((resp) => {
//           if (resp.status === 200) console.log(resp);
//           return resp.json();
//         })
//         .then((data) => {
//           this.nextUrl = data.next;
//           data.results.forEach((pokemon) => {
//             pokemon.id = pokemon.url
//               .split("/")
//               .filter(function (part) {
//                 return !!part;
//               })
//               .pop();
//             if (pokemon.id.length == 1) pokemon.id = "00" + pokemon.id;
//             if (pokemon.id.length == 2) pokemon.id = "0" + pokemon.id;
//             this.pokemons.push(pokemon);
//           });
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },
//   },
//   created() {
//     this.currentUrl = this.apiUrl;
//     this.fetchData();
//   },
//   mounted() {
//     this.scrollTrigger();
//   },
// };
//
</script>

<style lang="css" scoped>
/* body {
  display: flex;
  justify-content: center;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  width: 100%;
  max-width: 510px;
}
article {
  height: 150px;
  background-color: #efefef;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
h3 {
  margin: 0;
}

#scroll-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 2rem;
  color: #efefef;
} */

/* --------------------------------------------------------------- */

h1 {
  text-align: center;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 50px 0;
}

.grille {
  max-width: 1700px;
  width: 90%;
  height: auto;
  border: 2px solid grey;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-gap: 25px;
  justify-content: center;
}

.card {
  position: relative;
  border-radius: 25px;
  height: auto;
  width: 400px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  border: greenyellow 2px solid;
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
  margin-top: 25px;
  height: 360px;
  width: 400px;
  padding: 0 25px 25px 0px;
}

.item-grey {
  background: #222;
}

.item-orange {
  background: orange;
}

.Read-more {
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
