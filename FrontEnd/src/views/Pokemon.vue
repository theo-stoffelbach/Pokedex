<template>
  <body
    v-for="(pokemons_detail, index) in pokemons_details"
    :key="'poke' + index"
  >
    <div class="grid test">
      <div class="cartes">
        <img :src="pokemons_detail[2] + '.png'" class="pokemon_image" />
        <a @click="test" class="Read-more"> Read more </a>
      </div>
      <div class="cartes">
        <h1 class="title">{{ pokemons_detail[0].forms[0].name }}</h1>
        <p class="Text">Weight : {{ pokemons_detail[3] }}</p>
        <p class="Text">Height : {{ pokemons_detail[4] }}</p>
        <p class="Text">Types : {{ pokemons_detail[5] }}</p>
        <p class="Text">Weakness : {{ pokemon_weakness[0] }}</p>
        
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
      pokemon_weakness: [],
    };
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
        let Weakness = "";

        push_pokemon.push(data);

        let id = data.id.toString();

        if (id.length == 1) id = "00" + id;
        if (id.length == 2) id = "0" + id;

        let image_url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id;

        let masse = data.weight.toString();
        let masseInt = masse.slice(0, masse.length - 1);
        let masseDec = masse.slice(masse.length - 1, masse.length);
        if (masseDec == 0) masse = masseInt;
        else masse = masseInt + "," + masseDec + " kg";

        let taille = data.height.toString();
        if (taille.length == 1) taille = "0," + taille + " m";
        else {
          let tailleInt = taille.slice(0, taille.length - 1);
          let tailleDec = taille.slice(taille.length - 1, taille.length);
          taille = tailleInt + "," + tailleDec + " m";
        }

        let types = data.types;

        if (types.length == 1) {
          let url = data.types[0].type.url;
          let req = new Request(url);

          fetch(req) // PREMIER VERIFEEE ----------------------------------------------------
            .then((resp) => {
              if (resp.status === 200) return resp.json();
            })
            .then((donnees) => {
              let damage = donnees.damage_relations.double_damage_from;
              for (let i = 0; i < damage.length; i++) {
                if(i == 0) Weakness = damage[i].name;
                else Weakness =  Weakness + " and " + damage[i].name 

              }
              push_pokemon.push(Weakness);
              this.pokemon_weakness.push(Weakness);
            });

          types = types[0].type.name;
        } else {
          let url = data.types[0].type.url;
          let req = new Request(url);
          // let Weakness_list = [];

          fetch(req) // DEUXIEMEEEEEEEEEEEEEEE VERIFEEE ----------------------------------------------------
            .then((resp) => {
              if (resp.status === 200) return resp.json();
            })
            .then((donnees) => {
              let damage = donnees.damage_relations.double_damage_from;
              for (let i = 0; i < damage.length; i++) {
                if(i == 0) {
                  Weakness = damage[i].name;
                  // Weakness_list.push(Weakness);
                  }
                else {
                  // Weakness_list.push(Weakness);
                  Weakness =  Weakness + " and " + damage[i].name 
                  }

              push_pokemon.push(Weakness);
              }
            });

          let url_2 = data.types[1].type.url;
          let req_2 = new Request(url_2);

          fetch(req_2) 
            .then((resp) => {
              if (resp.status === 200) return resp.json();
            })
            .then((donnees_2) => {
              let damage = donnees_2.damage_relations.double_damage_from;
              for (let i = 0; i < damage.length; i++) {
                for (let j = 0; j < Weakness.length; j++) {
                  
                  console.log(Weakness[j]);
                }
                Weakness.push(damage[i].name);
              }
            });
        }

        push_pokemon.push(data);
        push_pokemon.push(image_url);

        push_pokemon.push(masse);
        push_pokemon.push(taille);
        push_pokemon.push(types);

        this.pokemons_details.push(push_pokemon);
        console.log(push_pokemon)
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
  margin: 20px 0;
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
