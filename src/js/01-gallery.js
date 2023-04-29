// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Импортируем библиотеку SimpleLightbox
import SimpleLightbox from 'simplelightbox';
// Импортируем стили библиотеки (для webpack)
import 'simplelightbox/dist/simple-lightbox.min.css';

// Функция для создания и рендеринга разметки галереи
function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        //элементы галереи (описание убрал)
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    )
    .join('');
}

// Получаем ссылку на элемент ul.gallery
const gallery = document.querySelector('.gallery');

// Создаем и добавляем разметку галереи в ul.gallery
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Инициализация SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
