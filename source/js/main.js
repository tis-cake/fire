const width = $(window).width();

// спиннер чисел
$(document).ready(function(){
  $('.js-spin-num').spincrement({
    thousandSeparator: "",
    duration: 2500,
  });
});

// мобильное меню
$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
    $("body").toggleClass('noscroll');
  });
});

// мобильное подменю
$(document).ready(function() {
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
$(document).ready(function() {
  $('.main-nav-sub').on('keydown', function(evt) {
    if (evt.keyCode === 13 || evt.keyCode === 32) {
      evt.preventDefault();
      let currentSublist = $(this).closest('.main-nav__item');

      $('.main-nav__item').not(currentSublist).removeClass('selected-on-tab');
      currentSublist.toggleClass('selected-on-tab');

      // клик мышкой вне выпадающего меню
      $(document).on('mouseup', function(evt) {
        if (!currentSublist.is(evt.target) && currentSublist.has(evt.target).length === 0) {
          currentSublist.removeClass('selected-on-tab');
        }
      });
    }
  });
});

// скользящая полоса в навигации
$(document).ready(function() {
  if (width >= 756) {
    let marker = $('#nav-decoration');
    let item = $('.main-nav__item');

    item.each(function() {
      $(this).on('mouseover', () => {
        marker.css('left', $(this).position().left);
        marker.width($(this).width());

        $('.main-nav').addClass('decor');
      })
    });

    $('.main-nav').on('mouseleave', () => {
      $('.main-nav').removeClass('decor');
    })
  }
});

// маска для поля ввода номера
$(document).ready(function() {
  $(".js-phone-mask").mask("+7 ( 999 ) 999 - 99 - 99");
});

// зеркальный блок
// .js-mirror-basis - блок, который нужно отзеркалить
// .js-mirror-container - контейнер, куда вставляем зеркальный блок
$(document).ready(function() {
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
  renderMirrorBlock('.main-info-program');
});

// плавное перемещение к форме регистрации и фокус на ней
$(document).ready(function() {
  $(".main-info-registration__go-form-link").on("click", function(evt) {
    // evt.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1000, function() {
      $('.form__name').focus();
    });
  });
});

// модальные окна
// оставить заявку (модалка 1)
$('.js-modal-callback').click(function(evt) {
  evt.preventDefault();
  openModal('.modal-callback', '.modal__name');
});

// коммерческое предложение (модалка 2)
$('.js-modal-business').click(function(evt) {
  evt.preventDefault();
  openModal('.modal-business', '.modal__name');
});

// маленькая модалка при успешной отправке формы на странице регистрации
// $('.registration__btn-submit').click(function(evt) {
//   evt.preventDefault();
//   resetRegistrationForm();
//   showModalForRegistrationForm();
// })

// открыть модальное окно
function openModal(modalClass, focusClass) {
  $('.overlay').fadeIn();
  $('body').addClass('noscroll');
  $(modalClass).addClass('active'); // класс модального окна
  $(focusClass).focus(); // класс для фокуса
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
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    closeModal();
  }
});

// слушаем клик/тач вне модального окна
$(document).on('mouseup touchstart', clickOutsideModal);

// кнопка закрыть
$('.modal__close').click(function(evt) {
  closeModal();
});

// !NB добавить в ajax-запрос
// сообщение об успешной отправке
// showMessageAfterRequest($(this));

function showMessageAfterRequest(current) {
  current.closest('.modal').addClass('reply');

  setTimeout(function() {
    closeModal();
    $('.modal').removeClass('reply');
  }, 3000);
}

function showModalForRegistrationForm() {
  $('.modal-notify').addClass('active');
  setTimeout(function() {
    $('.modal-notify').removeClass('active');
  }, 3000);
}

function resetRegistrationForm() {
  $('#registration-form').find('.form__input').each(function() {
    $('.form__input').val('');
  });
};
