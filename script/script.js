const nav = document.querySelector(".barra");

window.addEventListener("scroll", () => {
  nav.classList.toggle("active", window.scrollY > 100);
});
