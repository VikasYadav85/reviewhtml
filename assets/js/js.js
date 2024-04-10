// home slider
var swiper = new Swiper(".home-main-slider", {
  spaceBetween: 0,
  slidesPerView: 1,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".brand-slider", {
  spaceBetween: 10,
  slidesPerView: 2,
  watchSlidesProgress: true,
  spaceBetween: 10, 
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".header").addClass("darkHeader");
  } else{
    $(".header").removeClass("darkHeader");
  }
});