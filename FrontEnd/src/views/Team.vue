<template>
  <body>
    <div id="container1" style="margin-top: 4em">
      <div>
        <p class="none">None </p>
      </div>
      <!-- <div>
        <div class="pik_img"><img src="../assets/team/pik_img.png" /></div>
        <p class="item_pik">Pikachu</p>
      </div> -->

      <div>
        <p class="none">None </p>
      </div>

      <!-- <div>
        <div class="cha_img"><img src="../assets/team/cha_img.png" /></div>
        <p class="item_cha">Charmander</p>
      </div> -->
    </div>

    <div id="container2" style="margin-top: 2em">
      <div>
        <div class="pid_img"><img src="../assets/team/pid_img.png" /></div>
        <p class="item_pid">Pidgey</p>
      </div>

      <div>
        <div class="bul_img"><img src="../assets/team/bul_img.png" /></div>
        <p class="item_bul">Bulbasaure</p>
      </div>
    </div>

    <div id="container3" style="margin-top: 2em">
      <div>
        <div class="sqr_img"><img src="../assets/team/sqr_img.png" /></div>
        <p class="item_sqr">Squirtle</p>
      </div>

      <div>
        <div class="bla_img"><img src="../assets/team/bla_img.png" /></div>
        <p class="item_bla">Blastoise</p>
      </div>
    </div>

    <div id="grid" style="margin-top: 7em">
      <div
        class="cards"
        v-for="(pokemon, index) in pokemons"
        :key="'poke' + index"
      >
        <img :src="pokemon" class="pokemon image_cards" />
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Team_pok",
  data: () => {
    return {
      pokemons: [],
    };
  },
  mounted() {
    console.log("ded");
    for (let i = 1; i <= 898; i++) {
      if (i <= 9) i = "00" + i;
      if (i > 9 && i <= 99) i = "0" + i;

      if (i === 100) return;

      let image =
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + i + ".png";
      this.pokemons.push(image);
    }
    console.log(this.pokemons);
  },
};
</script>

<style>
.none {
  border: solid grey;
  border-radius: 25px;
  padding-left: 2em;
  width: 8em;
  height: 2em;
}

#grid {
  max-width: 1500px;
  width: 90%;
  height: auto;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 5px;
  justify-content: center;
  border: green 2px solid;
}

.cards {
  position: relative;
  border-radius: 25px;
  height: auto;
  width: 100px;
  height: 100px;
  background: #444;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.image_cards {
  width: 100px;
  height: 100px;
}

body {
  background-color: #121233;
}

#container1 {
  position: relative;
  color: #f88;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 30px;
}

#container2 {
  color: #f88;
  display: flex;
  width: auto;
  flex-direction: row;
  justify-content: space-around;
  font-size: 30px;
}

#container3 {
  color: #f88;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 30px;
}

.item_pid {
  border: solid grey;
  border-radius: 25px;
  padding-left: 2em;
  width: 8em;
  height: 2em;
}

.item_sqr {
  border: solid blue;
  border-radius: 25px;
  padding-left: 2em;
  width: 8em;
  height: 2em;
}

.item_bul {
  border: solid green;
  border-radius: 25px;
  padding-left: 2em;
  width: 8em;
  height: 2em;
  margin-top: 20px;
}

.item_pik {
  border: solid yellow;
  border-radius: 25px;
  padding-left: 2em;
  width: 8em;
  height: 2em;
}

.item_cha {
  border: solid red;
  border-radius: 25px;
  padding-left: 2em;
  width: 8em;
  height: 2em;
  margin-top: 20px;
}

.item_bla {
  border: solid #3b147b;
  border-radius: 25px;
  padding-left: 2em;
  width: 8em;
  height: 2em;
  margin-top: 20px;
}

/* -- IMG --*/
/* make margin in _img*/
.pik_img {
  margin-top: 20px;
  position: relative;
}

.pik_img img {
  position: absolute;
  left: 25px;
  width: 60px;
}

.cha_img {
  position: relative;
}

.cha_img img {
  margin-top: 20px;
  position: absolute;
  left: 25px;
  width: 57px;
}

.pid_img {
  position: relative;
  margin-top: 20px;
}

.pid_img img {
  position: absolute;
  left: 25px;
  width: 57px;
}

.sqr_img {
  margin-top: 20px;
  position: relative;
}

.sqr_img img {
  position: absolute;
  left: 25px;
  width: 57px;
}

.bla_img {
  position: relative;
}

.bla_img img {
  margin-top: 20px;
  position: absolute;
  left: 25px;
  width: 57px;
}

.bul_img {
  position: relative;
}

.bul_img img {
  margin-top: 20px;
  position: absolute;
  left: 25px;
  width: 57px;
}

@media screen and (max-width: 768px) {
  #container1 {
    flex-direction: column;
  }
  #container2 {
    flex-direction: column;
  }
  #container3 {
    flex-direction: column;
  }
}
</style>