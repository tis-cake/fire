const width = $(window).width();

// мобильное меню
$(document).ready(function () {
  $('.menu-toggle').click(function () {
  $(this).toggleClass('active');
  $('.header').toggleClass('active');
   $("body").toggleClass('noscroll');
  });
});

// мобильное подменю
$(document).ready(function () {
  if (width <= 756) {
    $('.main-nav-sub').click(function(evt) {
      evt.preventDefault();

      let currentSublist = $(this).closest('.main-nav__item').find('.main-nav__sublist');
      $('.main-nav__sublist').not(currentSublist).toggleClass('active');
      currentSublist.toggleClass('active');

      $('.main-nav-sub').not($(this)).toggleClass('active');
      $(this).toggleClass('active');
    });
  }
});

// доступное навигационное меню (enter и пробел)
$(document).ready(function () {
  $('.main-nav-sub').on('keydown', function (evt) {
    if (evt.keyCode === 13 || evt.keyCode === 32) {
      evt.preventDefault();
      let currentSublist = $(this).closest('.main-nav__item');

      $('.main-nav__item').not(currentSublist).removeClass('selected-on-tab');
      currentSublist.toggleClass('selected-on-tab');

      // клик мышкой вне выпадающего меню
      $(document).on('mouseup', function (evt) {
        if (!currentSublist.is(evt.target) && currentSublist.has(evt.target).length === 0) {
          currentSublist.removeClass('selected-on-tab');
        }
      });
    }
  });
});

// скользящая полоса в навигации
$(document).ready(function () {
  if (width >= 756) {
    let marker = $('#nav-decoration');
    let item = $('.main-nav__item');

    item.each(function() {
      $(this).on('mouseover', () => {
        marker.css('left', $(this).position().left) ;
        marker.width($(this).width());

        $('.main-nav').addClass('decor');
      })
    });

    $('.main-nav').on('mouseleave', () => {
      $('.main-nav').removeClass('decor');
    })
  }
});


// фильтр центров над картой
// $(document).ready(function () {
//   $('.filter__handler').on('click', function() {

//     $data = $(this).data('id');

//     // закрываем все списки, кроме текущего
//     $('.filter__handler').not($(this)).removeClass('active');
//     $('.filter__options').not($(this).closest('.filter__options')).removeClass('active');
//     $('.filter__list').not($('.filter__list[data-id='+$data+']')).slideUp();

//     // открываем текущий список
//     $(this).toggleClass('active');
//     $(this).closest('.filter__options').toggleClass('active');
//     $(this).find($('.filter__list[data-id='+$data+']').slideToggle());

//     // закрываем все списки при клике вне элемента
//     $(document).on('mouseup touchstart', function (evt) {
//       let currentEl = $(".filter__options.active");
//       if (!currentEl.is(evt.target) && currentEl.has(evt.target).length === 0) {
//         $('.filter__handler').removeClass('active');
//         $('.filter__options').removeClass('active');
//         $('.filter__list').slideUp();
//       }
//     });

//     // ловим клик внутри списка и подставляем выбранное значение
//     $('.filter__item').click(function () {
//       $value = $(this).text();
//       $(this).addClass('active');

//       $(this).closest('.filter__options').find('.filter__handler').text($value);

//       $(this).closest('.filter__options').find('input').val($value);
//       if ($(this).closest('.filter__options').find('input').change()) {
//         $(this).closest('.filter__options').removeClass('active');
//         $(this).closest('.filter__options').find('.filter__handler').removeClass('active');
//         $(this).closest('.filter__options').find('.filter__list').slideUp();
//       }
//     });
//   });
// });

// маска для поля ввода номера
$(document).ready(function () {
  $(".js-phone-mask").mask("+7 ( 999 ) 999 - 99 - 99");
});

// зеркальный блок
// .js-mirror-basis - блок, который нужно отзеркалить
// .js-mirror-container - контейнер, куда вставляем зеркальный блок
$(document).ready(function () {
  let fragment = $(document.createDocumentFragment());

  function renderMirrorBlock(parentClass) {
    let mirrorBasis = $(parentClass + ' .js-mirror-basis');
    let mirrorContainer = $(parentClass + ' .js-mirror-container');

    let mirror = mirrorBasis.clone();
    mirror.removeClass('js-mirror-basis');

    fragment.append(mirror);
    mirrorContainer.append(fragment);
  }

  renderMirrorBlock('.main-info-catalog');
  renderMirrorBlock('.main-info-ways');
  renderMirrorBlock('.main-info-registration');

});

// модальные окна
$(document).ready(function () {

  // оставить заявку (модалка 1)
  $('.js-modal-callback').click(function (evt) {
    evt.preventDefault();
    openModal('.modal-callback', '.modal__input-phone');
  });

  // открыть модальное окно
  function openModal(modalClass, focusClass) {
    $('.overlay').fadeIn();
    $('body').addClass('noscroll');
    $(modalClass).addClass('active');    // класс модального окна
    $(focusClass).focus();               // класс для фокуса
  }

  // закрыть модальное окно
  function closeModal() {
    if ($('.modal').hasClass('active')) {
      $('.modal').removeClass('active');
      $('.overlay').fadeOut();
      $('body').removeClass('noscroll');
    }
  }

  // клик/тач вне модального окна -> закрыть окно
  function clickOutsideModal(evt) {
    let modal = $('.modal');
    if (!modal.is(evt.target) && modal.has(evt.target).length === 0) {
      closeModal();
    }
  }

  // нажат esc -> закрыть окно
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      closeModal();
    }
  });

  // слушаем клик/тач вне модального окна
  $(document).on('mouseup touchstart', clickOutsideModal);

  // кнопка закрыть
  $('.modal__close').click(function (evt) {
    closeModal();
  });

  // !NB добавить а ajax-запрос
  // сообщение об успешной отправке
  // showMessageAfterRequest($(this));

  function showMessageAfterRequest(current) {
    current.closest('.modal').addClass('reply');

    setTimeout(function() {
      closeModal();
      $('.modal').removeClass('reply');
    }, 3000);
  }
});
