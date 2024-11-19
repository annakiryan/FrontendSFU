   const hamburger = document.querySelector(".hamburger");
   const menu = document.querySelector('.header__menu')
   const nav = document.querySelector('.header__nav')
  hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle('nav--is-active');
  menu.classList.toggle('menu--is-active');
  
});