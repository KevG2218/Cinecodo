"use strict";

var btnsInfo = document.querySelectorAll(".movie-card"),
    btnClose = document.querySelector(".btn-close"),
    ctnInfo = document.querySelector(".container-info"),
    main = document.querySelector("main");
/* Funcion que permite obtener el informacion de la pelicula seleccionada*/

btnsInfo.forEach(function (btn) {
  btn.addEventListener("click", function () {
    tittleMovie = this.querySelector(".tittle-movie").textContent;
    ctnInfo.querySelector(".tittle-info").textContent = tittleMovie;
    var movieInfo = this.querySelector(".movie-image").src;
    var pathImg = movieInfo.replace(/^.*\/\/[^\/]+/, "");
    ctnInfo.querySelector(".movie-selectimg").src = pathImg;
    ctnInfo.classList.add("show");
    ctnInfo.classList.remove("close");
    ctnInfo.style.visibility = "visible";
    main.classList.add("pointer-e");
  });
});
/*Cierra el container de informacion de la pelicula selecciona*/

btnClose.addEventListener("click", function () {
  ctnInfo.classList.remove("show");
  ctnInfo.classList.add("close");
  main.classList.remove("pointer-e");
});
/*Corrobora que haya finalizado una animacion*/

ctnInfo.addEventListener("animationend", function (event) {
  if (event.animationName === "scale-down-center") {
    ctnInfo.style.visibility = "hidden";
    ctnInfo.classList.remove("show");
  }
});
/*inicio de sesion, aun incompleto 
no funciona aun -- 

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "usuario" && password === "123") {
      
      window.location.href = "index.html";
    }
  });
});
*/