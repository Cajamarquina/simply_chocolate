const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  
  // loop: true,

  // If we need pagination
  pagination: {
        clickable: true, // что-бы сделать пагинацию кликабельной

    el: '.swiper-pagination-our-product',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
        spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },

});
