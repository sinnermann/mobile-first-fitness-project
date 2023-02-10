let nav = document.querySelector(".header__nav");
let burger = document.querySelector(".header__hamburger");
let burgerFirstLine = document.querySelector(".line-1");
let burgerSecondLine = document.querySelector(".line-2");
let burgerThirdLine = document.querySelector(".line-3");
let bodyEl = document.querySelector("body");

burger.addEventListener("click", function () {
  burgerFirstLine.classList.toggle("line-1-toggled");
  burgerSecondLine.classList.toggle("line-2-toggled");
  burgerThirdLine.classList.toggle("line-3-toggled");

  burger.classList.toggle("hamburger-toggled");

  nav.classList.toggle("display-nav");

  bodyEl.classList.toggle("overlay");
});
