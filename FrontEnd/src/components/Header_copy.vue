<template>
  <nav>
    <div class="logo">
      <img
        class="logo"
        src="https://github.com/Snakeshader-pro/Pokedex/blob/Th%C3%A9o/src/assets/logo_pokemon,.png?raw=true"
        alt=""
      />
    </div>
    <div class="openMenu"><i v-on:click="openMenu">Open</i></div>
    <ul class="mainMenu">
      <div class="hamburger">
        <li><router-link to="/"> Pokedex</router-link></li>
        <li><router-link to="/Team">Team</router-link></li>
        <li><router-link to="/Friend">Friend</router-link></li>
        <li><router-link to="/Account/Login">Account</router-link></li>
      </div>

      <div class="closeMenu">
        <i v-on:click="closeMenu">Close</i>
      </div>
    </ul>
  </nav>
  <div class="margin"></div>

  <router-view />

  <link
    href="//db.onlinewebfonts.com/c/a222402127a0453c817a6cf4c3d9810b?family=Pokemon"
    rel="stylesheet"
    type="text/css"
  />
</template>

<script>
export default {
  name: "Header",
  props: ["id"],
  methods: {
    openMenu() {
      const mainMenu = document.querySelector(".mainMenu");

      mainMenu.style.display = "flex";
      mainMenu.style.top = "0";
      console.log("open");
    },
    closeMenu() {
      const mainMenu = document.querySelector(".mainMenu");

      console.log("close");

      mainMenu.style.top = "-100%";
    },
  },
};
</script>

<style>

body {
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
}

.hamburger {
  display: flex;
  height: 100%;
  align-items: center;
  margin-right: 50px;
}

nav {
  position: absolute;
  top: 0;

  height: 75px;
  width: 100%;

  background: rgb(54, 54, 54);
  color: #fff;
  display: flex;
  justify-content: space-between;
}

nav .mainMenu {
  display: flex;
  list-style: none;
  align-items: center;

  margin-right: 75px;
}

nav .mainMenu li a {
  display: inline-block;
  padding: 15px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
}

nav .mainMenu li a:hover {
  color: rgba(208, 35, 48, 50);
}
nav .openMenu {
  font-size: 2rem;
  margin: 20px;
  display: none;
  cursor: pointer;
}
nav .mainMenu .closeMenu,
.icon i {
  font-size: 2rem;
  display: none;
  cursor: pointer;
}

nav .logo {
  margin-left: 12px;
  font-size: 25px;
  cursor: pointer;
  width: 75px;
  height: 75px;
}

img .logo {
  width: 75px;
  height: 75px;
}

@media (max-width: 800px) {
  a .router-link-active {
    color: blueviolet;
    background: violet;
  }

  .hamburger {
    display: flex;
    flex-direction: column;

    justify-content: center;
    height: auto;
    margin: 0;
  }

  nav .mainMenu {
    height: 100vh;
    position: fixed;
    margin-right: 0;

    justify-content: center;

    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    background: rgb(54, 54, 54);
    transition: top 1s ease;
  }
  nav .mainMenu .closeMenu {
    display: block;
    position: absolute;

    top: 40px;
    right: 40px;
  }
  nav .openMenu {
    display: block;
  }

  .icons i {
    display: inline-block;
    padding: 12px;
  }
  nav .openMenu {
    display: flex;
    align-items: center;
  }
  nav .logo {
    display: flex;
    align-items: center;
  }
}
</style>