  let swiper = new Swiper(".swiper-reviews", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".cards-pagination",
        clickable: true,
      },
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
      }
    });