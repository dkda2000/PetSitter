function scroll() {
  const nav = document.querySelector(".barra");
  const flecha = document.querySelector(".go-up");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("active", window.scrollY > 100);
  });

  window.addEventListener("scroll", () => {
    flecha.classList.toggle("active", window.scrollY > 500);
  });
}

function selectMenu() {
  const menu = document.querySelector("#menu");
  const menuLinks = document.querySelectorAll(".menu a[href^='#']");

  menuLinks.forEach((menuLinks) => {
    menuLinks.addEventListener("click", function () {
      menu.click();
    });
  });
}

scroll();
selectMenu();
