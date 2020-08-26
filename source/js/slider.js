// слайдер врачей
// $(document).ready(function () {

  let mainSwiper = new Swiper('#main-swiper', {
    slidesPerView: '1',
    // spaceBetween: 25,
    // touchRatio: 0,

    direction: 'vertical',
    // loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,

      // dynamicBullets: true,

      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<i>' + (index + 1) + '</i>' + '</span>';
      }
    },

    // watchSlidesVisibility: true,

    navigation: {
      nextEl: '.main-swiper__button-next',
      prevEl: '.main-swiper__button-prev',
    },

    // breakpoints: {
    //   756: {
    //     slidesPerView: '3',
    //     spaceBetween: 20,
    //   },
    // }
  });
// });

// слайдер клиник
// $(document).ready(function () {

//   let rehabsSwiper = new Swiper('#rehabs-swiper', {
//     slidesPerView: '2',
//     spaceBetween: 25,
//     touchRatio: 1,

//     navigation: {
//       nextEl: '.rehabs-swiper__button-next',
//       prevEl: '.rehabs-swiper__button-prev',
//     },

//     breakpoints: {
//       756: {
//         slidesPerView: '4',
//         spaceBetween: 20,
//       },
//     }
//   });
// });
