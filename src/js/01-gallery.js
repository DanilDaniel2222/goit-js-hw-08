// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).
// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";


import SimpleLightbox from 'simplelightbox';
import throttle from 'lodash/throttle';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems.map(item => 
   `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>`
    ).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a', 
    { captionsData: "alt", captionDelay: 250 });
