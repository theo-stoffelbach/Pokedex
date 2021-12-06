<template>
  <nav>
    <div class="logo"><h1>Pokedex</h1></div>
    <div class="openMenu"><i v-on:click="openMenu">Open</i></div>
    <ul class="mainMenu">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Account</a></li>
      <div class="closeMenu">
        <i v-on:click="closeMenu">Close</i>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
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


html {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}

nav {
  position: absolute;
  top: 0;

  height: auto;
  width: 100%;
  height: 75px;

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
  margin: 6px;
  font-size: 25px;
  cursor: pointer;
}

@media (max-width: 800px) {
  nav .mainMenu {
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    transition: top 1s ease;
    display: none;
  }
  nav .mainMenu .closeMenu {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  nav .openMenu {
    display: block;
  }
  nav .mainMenu li a:hover {
    background: none;
    color: rgb(255, 123, 0);
    font-size: 1.6rem;
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