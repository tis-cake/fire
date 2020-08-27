// Как устроен двойной слайдер (пагинация-thumbs):
//
// 1) Рендерим параметры пагинации.
// 2) Рендерим слайдер-пагинацию (thumbs).
// 3) Рендерим параметры главного слайдера (c зависимостью от thumbs).
// 4) Рендерим главный слайдер с параметрами.

// параметры пагинации
function renderSwiperThumbsParam() {
  let swiperThumbsParam = {
    slidesPerView: '3',
    direction: 'vertical',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  }

  return swiperThumbsParam;
}

// параметры главного слайдера
function renderSwiperContentParam(id, thumbsName) {
  let swiperContentParam = {
    slidesPerView: '1',
    direction: 'vertical',

    navigation: {
      nextEl: id + ' .pagination-swiper-button-next',
      prevEl: id + ' .pagination-swiper-button-prev',
    },

    thumbs: {
      swiper: thumbsName
    }
  }

  return swiperContentParam;
}

function renderSwiper(id) {
  let swiperThumbsParam = renderSwiperThumbsParam();
  let swiperThumbs = new Swiper(id + ' .pagination-swiper-container', swiperThumbsParam);

  let swiperContentParam = renderSwiperContentParam(id, swiperThumbs);
  let swiperContent = new Swiper(id + ' .content-swiper-container', swiperContentParam);
}

// главный слайдер (index, первый экран)
renderSwiper('#main-swiper');



// let swiperThumbs = new Swiper('#main-swiper .pagination-swiper-container', {
//   slidesPerView: '3',
//   direction: 'vertical',
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });

// let mainSwiper = new Swiper('#main-swiper .-swiper-container', {
//   slidesPerView: '1',
//   direction: 'vertical',

//   navigation: {
//     nextEl: '.pagination-swiper-button-next',
//     prevEl: '.pagination-swiper-button-prev',
//   },

//   thumbs: {
//     swiper: swiperThumbs
//   }
// });
