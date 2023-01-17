//Menu Burger Header

let menuBtn = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

//hit slider
const slider = new Swiper(".hit__wrapper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//carousel swiper

const swiper = new Swiper(".carousel__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  loop: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

//katalog swiper

const slid = new Swiper(".katalog__column", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  loop: true,
});

//search

let searchOpens = document.querySelector(".header__search");
let searchOpen = document.querySelector(".header__form");

searchOpens.addEventListener("click", function () {
  searchOpen.classList.toggle("header__form-active");
});


//Session btn see

const btn = document.querySelector(".care__btn");
const see = document.querySelector(".care__subtitle-none");
btn.addEventListener("click", function () {
  see.classList.toggle("active");
});

