<template>
  <body>
    <div id="container1" style="margin-top: 4em">
        
        <div>
            <div class="pik_img"><img src="../assets/team/pik_img.png" /></div>
            <p class="item_pik">Pikachu</p>
        </div>
        
        <div>
            <div class ="cha_img"><img src="../assets/team/cha_img.png" /></div>
            <p class="item_cha">Charmander</p>
        </div>
    </div>
    
    <div id="container2" style="margin-top: 2em">

        <div>
            <div class ="pid_img"><img src="../assets/team/pid_img.png" /></div>
            <p class ="item_pid">Pidgey</p>
        </div>
        
        <div>
            <div class ="pid_img"><img src="../assets/team/bul_img.png" /></div>
            <p class ="item_pid">Bulbasaure</p>
        </div>

    </div>

    <div id="container3" style="margin-top: 2em">
        <div>
            <div class ="sqr_img"><img src="../assets/team/sqr_img.png" /></div>
            <p class ="item_pid">Squirtle</p>
        </div>
        
        <div>
            <div class ="bla_img"><img src="../assets/team/bla_img.png" /></div>
            <p class ="item_pid">Blastoise</p>
        </div>

    </div>

    <div id = "grid" style="margin-top: 2em">
        
    </div>
  </body>
</template>

<script>
export default {
  name: "Team_pok",
};
</script>

<style>
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
}
.item_bla {
  border: solid #3b147b;
  border-radius: 25px;
  padding-left: 2em;
  width: 8em;
  height: 2em;
}
/* -- IMG --*/
/* make margin in _img*/
.pik_img {
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
    position: absolute;
    left: 25px;
    width: 57px;
}
.pid_img {
  position: relative;
}
.pid_img img {
    position: absolute;
    left: 25px;
    width: 57px;
}
.sqr_img {
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
    position: absolute;
    left: 25px;
    width: 57px;
}
.bul_item {
    position: relative;
}
.bul_item img {
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