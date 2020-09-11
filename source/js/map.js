ymaps.ready(init);

var mapCenter = []
if (width > 768) {
  mapCenter = [55.737405, 37.649148];
} else if (width <= 768) {
  mapCenter = [55.737405, 37.651948];
}

function init() {
  // первичные данные для карты
  var map = new ymaps.Map('map', {
    // center: [55.737405, 37.649148],
    center: mapCenter,
    zoom: 16,
    controls: [],
    behaviors: ['drag', 'dblClickZoom', 'scrollZoom']
  });

  // контент балуна
  var nameBalloon = 'Гончарная наб. 9/16, стр. 1';

  // кастомный балун
  var customBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="map__balloon">'+nameBalloon+'</div>'
  );

  // маркер на карту (дефолтная иконка + кастомный балун)
  var myPlacemark = new ymaps.Placemark([55.737405, 37.649148],

    // свойства балуна
    {
      // balloonContent: '', // контент балуна, можно вставить разметку
    },

    // свойства изображения (или дефолтная иконка или свое изображение)
    {
      preset: 'islands#redIcon', // дефолтная иконка

      // iconLayout: 'default#image',           // тип своего изображения
      // iconImageHref: 'img/marker-maps.png',  // путь к изображению
      // iconImageSize: [40, 45],               // размер
      // iconImageOffset: [-6, -10],            // смещение изображения

      // balloonContentLayout: customBalloonContentLayout, // свой макет в балуне
      balloonLayout: customBalloonContentLayout, // свой балун
      hideIconOnBalloonOpen: false,              // не скрываем иконку при открытом балуне
      balloonOffset: [20, -30],                  // смещение балуна относительно иконки
      // balloonShadow: false,                   // тень балуна

      // Если карта имеет маленькие размеры, то балун отображается в виде панели в нижней части карты,
      // но кастомный балун может вообще не отображаться. Фикс в {balloonPanelMaxMapArea: 0}
      balloonPanelMaxMapArea: 0,
    });

  // добавляем маркер на карту
  map.geoObjects.add(myPlacemark);

  // держим балун всегда открытым
  myPlacemark.balloon.open();
}
