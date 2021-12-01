const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
console.log("slt");

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
  console.log("eehhh");
}

function close() {
  mainMenu.style.top = "-100%";
}
