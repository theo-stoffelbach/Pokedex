<template>
<body style="
  font-family: sans-serif;
  background-image: url(https://github.com/Snakeshader-pro/Pokedex/blob/Th%C3%A9o/FrontEnd/src/assets/bulbasaur-pokemon-dt-3840x2160.jpg?raw=true);
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  ">
   
  <div class="container">
    <div class="header">
      <h1>login</h1>
    </div>
    <div class="main">
      <form>
        <span>
          <i class="fa fa-user"></i>
          <input type="text" placeholder="Username" name="" v-model="email"/> </span
        ><br />
        <span>
          <i class="fa fa-lock"></i>
          <input type="password" placeholder="password" name="" /> </span
        ><br />
      </form>
    </div>
  </div>
  </body>
</template>



<script>
// import firebase from 'firebase';
export default {
  name: "Pokemon",
  props: ["id"],
  data() {
    return {
      email:"",
      password:"",
    }
  },
  methods: {
    login: function() {
      // firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      // .then(
      //   user => {
      //     console.log(user.data)
      //   },
      //   err => {
      //     alert(err);
      //   }
      // );
    }
  },
  mounted() {
    document.getElementById("html").style.overflow = "hidden";

}
};  
</script>



<style scoped>
html {
  overflow-x: hidden;
}

body {
    height: 1080px;
}

.container {
  width: 380px;
  margin: 7% auto;
  border-radius: 25px;
  background-color: rgba(200, 200, 200, 0.5);
  box-shadow: 0 0 17px #333;
}

.header {
  text-align: center;
  padding-top: 75px;
}

.header h1 {
  color: #ddd;
  font-size: 45px;
  margin-bottom: 80px;
}

.main {
  text-align: center;
}

.main input,
button {
  width: 300px;
  height: 40px;
  border: none;
  outline: none;
  padding-left: 40px;
  box-sizing: border-box;
  font-size: 15px;
  color: #333;
  margin-bottom: 40px;
  border-radius: 7px;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -o-border-radius: 7px;
}

.main button {
  padding-left: 0;
  background-color: #83acf1;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 70px;
}

.main button:hover {
  box-shadow: 2px 2px 5px #555;
  background-color: #7799d4;
}
.main input:hover {
  box-shadow: 2px 2px 5px #555;
  background-color: #ddd;
}

.main span {
  position: relative;
}

.main i {
  position: absolute;
  left: 15px;
  color: #333;
  font-size: 16px;
  top: 2px;
}
</style>

