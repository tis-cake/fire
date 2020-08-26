// слайдер врачей
// $(document).ready(function () {

  // let mainSwiper = new Swiper('#main-swiper', {
  //   slidesPerView: '1',
  //   // spaceBetween: 25,
  //   // touchRatio: 0,

  //   direction: 'vertical',
  //   // loop: true,

  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,

  //     // dynamicBullets: true,

  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + '<i>' + (index + 1) + '</i>' + '</span>';
  //     }
  //   },

  //   // watchSlidesVisibility: true,

  //   navigation: {
  //     nextEl: '.main-swiper__button-next',
  //     prevEl: '.main-swiper__button-prev',
  //   },

  //   // breakpoints: {
  //   //   756: {
  //   //     slidesPerView: '3',
  //   //     spaceBetween: 20,
  //   //   },
  //   // }
  // });
// });

let mainSwiperPagination = new Swiper('#main-swiper .pagination-swiper-container', {
  slidesPerView: '3',
  direction: 'vertical',
  // loop: true,

  // navigation: {
  //   nextEl: '.pagination-swiper-button-next',
  //   prevEl: '.pagination-swiper-button-prev',
  // },
});


let mainSwiper = new Swiper('#main-swiper .content-swiper-container', {
  slidesPerView: '1',
  direction: 'vertical',
  // loop: true,

  // navigation: {
  //   nextEl: '.main-swiper__button-next',
  //   prevEl: '.main-swiper__button-prev',
  // },

  navigation: {
    nextEl: '.pagination-swiper-button-next',
    prevEl: '.pagination-swiper-button-prev',
  },

  thumbs: {
    swiper: mainSwiperPagination
  }
});
