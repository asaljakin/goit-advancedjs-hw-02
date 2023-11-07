// Описаний в документації* 
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів*
import "simplelightbox/dist/simple-lightbox.min.css";

// Adds imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    (acc += `<li>
            <a class="gallery__item gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
            </li>`
    ),
    ''
);

galleryList.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
