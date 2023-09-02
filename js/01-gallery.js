import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const test = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
	<a class="gallery__link"  href="large-image.jpg">
	  <img
		 class="gallery__image"
		 src="${preview}"
		 data-source="${original}"
		 alt="${description}"
	  />
	</a>
 </li>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", test);

gallery.addEventListener("click", fu);

function fu(evt) {
  evt.preventDefault();
  const source = evt.target.dataset.source;
  if (evt.target.tagName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${source}">
	`,
    {
      onClose: () => {
        window.removeEventListener("keydown", finish);
      },
    }
  );
  instance.show();

  const finish = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };

  window.addEventListener("keydown", finish);
}
