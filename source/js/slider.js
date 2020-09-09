// Как устроен двойной слайдер (c пагинацией-thumbs):
//
// 1) Рендерим параметры пагинации.
// 2) Рендерим слайдер-пагинацию (thumbs).
// 3) Рендерим параметры главного слайдера (c зависимостью от thumbs).
// 4) Рендерим главный слайдер с параметрами.

// Параметрами в renderSwiper() передаём:
// 1) id слайдера;
// 2) направление ('vertical'/'horizontal'),
//    у контейнеров с id должны быть соответствующие классы в разметке ('.vertical'/'.horizontal');
// 3) длинная пагинация (true/false),
//    у контейнера с id должен быть соответствующий класс в разметке ('.long-pagination');

// слайдер главный (index, первый экран)
renderSwiper('#main-swiper', 'vertical');

// слайдер проектов
renderSwiper('#project-swiper', 'vertical');

// слайдер событий
renderSwiper('#event-swiper', 'horizontal');

// слайдер детального проекта ("Салют")
renderSwiper('#project-detail-swiper', 'horizontal');

// слайдер наград (с длинной пагинацией)
renderSwiper('#reward-swiper', 'horizontal', true);

// параметры пагинации
function renderSwiperThumbsParam(direction, longPagination) {

  let swiperThumbsParam = {
    slidesPerView: '3',
    direction: 'horizontal',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    breakpoints: {
      768: {
        direction: direction,
        slidesPerView: '3'
      },
      600: {
        slidesPerView: '5'
      },
      500: {
        slidesPerView: '4'
      }
    }
  }

  // если у слайдера длинная пагинация
  if (longPagination) {
    swiperThumbsParam.breakpoints['768'].slidesPerView = 12;
  }


  // if (longPagination) {
  //   swiperThumbsParam = {
  //     slidesPerView: '3',
  //     direction: 'horizontal',
  //     watchSlidesVisibility: true,
  //     watchSlidesProgress: true,

  //     breakpoints: {
  //       768: {
  //         direction: direction,
  //         slidesPerView: '12'
  //       },
  //       600: {
  //         slidesPerView: '5'
  //       },
  //       500: {
  //         slidesPerView: '4'
  //       }
  //     }
  //   }
  // } else if (!longPagination) {
  //   swiperThumbsParam = {
  //     slidesPerView: '3',
  //     direction: 'horizontal',
  //     watchSlidesVisibility: true,
  //     watchSlidesProgress: true,

  //     breakpoints: {
  //       768: {
  //         direction: direction,
  //         slidesPerView: '3'
  //       },
  //       600: {
  //         slidesPerView: '5'
  //       },
  //       500: {
  //         slidesPerView: '4'
  //       }
  //     }
  //   }
  // }

  return swiperThumbsParam;
}

// параметры главного слайдера
function renderSwiperContentParam(id, direction, thumbsName, longPagination) {
  let swiperContentParam = {
    slidesPerView: '1',
    direction: 'horizontal',
    spaceBetween: 10,

    navigation: {
      nextEl: id + ' .pagination-swiper-button-next',
      prevEl: id + ' .pagination-swiper-button-prev',
    },

    thumbs: {
      swiper: thumbsName
    },

    breakpoints: {
      756: {
        direction: direction
      }
    }
  }

  // активным делаем последний слайд
  if (longPagination) {
    makeInitialSlideOfLast(id, swiperContentParam);
  }

  return swiperContentParam;
}

// если длинный слайдер - при инициализации активным делаем последний слайд
function makeInitialSlideOfLast(id, swiperParam) {
 let currentSlidesLength = document.querySelectorAll(id + ' .swiper-slide.pagination-swiper-slide:not(.swiper-slide-duplicate)').length;
 swiperParam.initialSlide = currentSlidesLength;;
}

function renderSwiper(id, direction, longPagination) {
  // опционально
  // let currentSwiper = document.querySelector(id);
  // currentSwiper.classList.add(direction);
  // if (longPagination) {
  //   currentSwiper.classList.add('long-pagination');
  // }

  let swiperThumbsParam = renderSwiperThumbsParam(direction, longPagination);
  let swiperThumbs = new Swiper(id + ' .pagination-swiper-container', swiperThumbsParam);

  let swiperContentParam = renderSwiperContentParam(id, direction, swiperThumbs, longPagination);
  let swiperContent = new Swiper(id + ' .content-swiper-container', swiperContentParam);
}
