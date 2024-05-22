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


//seccion2

if(document.getElementById("ButtonModal")){

var modal = document.getElementById("myModal");
var button = document.getElementById("ButtonModal");
var span = document.getElementsByClassName("close")[0];
var body = document.getElementsByTagName("body");

button.onclick = function(){
  modal.style.display= "block";
  body.style.position= "static";
  body.style.height= "100%";
  body.style.overflow= "hidden";
}
span.onclick = function(){
  modal.style.display= "none";
  body.style.position= "inherit";
  body.style.height= "auto";
  body.style.overflow= "visible";

}
}