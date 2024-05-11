const nav = document.querySelector(".barra");

window.addEventListener("scroll", () => {
  nav.classList.toggle("active", window.scrollY > 100);
});

const menu = document.querySelector("#menu");
const menuLinks = document.querySelectorAll(".menu a[href^='#']");

menuLinks.forEach((menuLinks) => {
  menuLinks.addEventListener("click", function () {
    menu.click();
  });
});
