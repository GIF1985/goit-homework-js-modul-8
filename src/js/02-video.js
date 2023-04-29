// Импортируем библиотеку Vimeo плеера
import Player from '@vimeo/player';
// Импортируем функцию throttle из библиотеки lodash.throttle
import throttle from 'lodash.throttle';

// Создаем экземпляр класса Player и сохраняем его в переменную player
const player = new Player('vimeo-player');

// Добавляем обработчик события timeupdate,
// который вызывается при каждом обновлении времени воспроизведения
player.on(
  'timeupdate',
  throttle(function (data) {
    // Сохраняем текущее время воспроизведения в локальное хранилище
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

// При перезагрузке страницы проверяем, есть ли сохраненное время воспроизведения
const currentTime = localStorage.getItem('videoplayer-current-time');
// Если есть, устанавливаем его в качестве текущего времени воспроизведения
if (currentTime) {
  player.setCurrentTime(currentTime);
}
