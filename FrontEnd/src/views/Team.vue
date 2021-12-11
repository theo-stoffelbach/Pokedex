<template>
  <body>
    <div id="container1" style="margin-top: 4em">
      <p class="item_pik">Pikachu</p>
      <p class="item_cha">Charmander</p>
      </div>
    <div id="container2" style="margin-top: 2em">
      <p class="item_pid">Pidgey</p>
      <p class="item_bul">Bulbasaure</p>
    </div>
    <div id="container3" style="margin-top: 2em">
      <p class="item_sqr">Squirtle</p>
      <p class="item_bla">Blastoise</p>
    </div>
    <div class="pik_img"><img src="../assets/team/pik_img.png"></div>
    <div class="cha_img"><img src="../assets/team/cha_img.png"></div>
    <div class="pid_img"><img src="../assets/team/pid_img.png"></div>
    <div class="bul_img"><img src="../assets/team/bul_img.png"></div>
    <div class="sqr_img"><img src="../assets/team/sqr_img.png"></div>
    <div class="bla_img"><img src="../assets/team/bla_img.png"></div>
  </body>
</template>

<script>
export default {
  name: "Team_pok",
};
</script>

<style>

#container1 {
    color:#f88; 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 30px
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
    width  : 8em;
    height : 2em;
}

.item_sqr {
    border: solid blue;
    border-radius: 25px;
    padding-left: 2em;
    width  : 8em;
    height : 2em;
}
.item_bul {
    border: solid green;
    border-radius: 25px;
    padding-left: 2em;
    width  : 8em;
    height : 2em;
}
.item_pik {
    border: solid yellow;
    border-radius: 25px;
    padding-left: 2em;
    width  : 8em;
    height : 2em;
}
.item_cha {
    border: solid red;
    border-radius: 25px;
    padding-left: 2em;
    width  : 8em;
    height : 2em;
}
.item_bla {
    border: solid #3b147b;
    border-radius: 25px;
    padding-left: 2em;
    width  : 8em;
    height : 2em;
}
/*make responsive img*/ 
.pik_img{
    position: absolute;
    top: 115px;
    left: 240px;
}
.pik_img img {
    width: 68px;
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