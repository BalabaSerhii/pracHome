import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const test = galleryItems
.map(({ preview, description, original }) => {
	return `<li class="gallery__item">
	<a class="gallery__link" href="${original}">
	<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>
	</li>
	`;
})
.join("");

gallery.insertAdjacentHTML("afterbegin", test);
const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom', fadeSpeed: 100,animationSpeed: 0,
});



