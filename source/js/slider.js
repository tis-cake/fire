// Как устроен двойной слайдер (c пагинацией-thumbs):
//
// 1) Рендерим параметры пагинации.
// 2) Рендерим слайдер-пагинацию (thumbs).
// 3) Рендерим параметры главного слайдера (c зависимостью от thumbs).
// 4) Рендерим главный слайдер с параметрами.

// параметры пагинации
function renderSwiperThumbsParam(direction) {
  let swiperThumbsParam = {
    slidesPerView: '3',
    direction: direction,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  }

  return swiperThumbsParam;
}

// параметры главного слайдера
function renderSwiperContentParam(id, direction, thumbsName) {
  let swiperContentParam = {
    slidesPerView: '1',
    direction: direction,
    spaceBetween: 10,

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

function renderSwiper(id, direction) {
  // опционально
  // document.querySelector(id).classList.add(direction);

  let swiperThumbsParam = renderSwiperThumbsParam(direction);
  let swiperThumbs = new Swiper(id + ' .pagination-swiper-container', swiperThumbsParam);

  let swiperContentParam = renderSwiperContentParam(id, direction, swiperThumbs);
  let swiperContent = new Swiper(id + ' .content-swiper-container', swiperContentParam);
}

// параметрами передаём id и направление ('vertical'/'horizontal')
// у контейнеров с id должны быть соответствующие классы ('.vertical'/'.horizontal')

// слайдер главный (index, первый экран)
renderSwiper('#main-swiper', 'vertical');

// слайдер проектов
renderSwiper('#project-swiper', 'vertical');

// слайдер событий
renderSwiper('#event-swiper', 'horizontal');
