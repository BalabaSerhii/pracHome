import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const test = galleryItems
  .map((imgEl) => {
    return `<li class="gallery__item">
	<a class="gallery__link" target="_blank" ">
	  <img
		 class="gallery__image"
		 src="${imgEl.preview}"
		 data-source="${imgEl.original}"
		 alt="${imgEl.description}"
	  />
	</a>
 </li>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", test);

// const ttt = evt.target.classList.contains('gallery__image');

// {

// 	gallery.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()

// }

// gallery.addEventListener('click', openImg);

// function openImg(evt) {
// 	// if (!evt.target.classList.contains('gallery__image')) {
// 	// 	return
// 	// } else {
// 	// 	basicLightbox.create(`
// 	// 	<img width="1400" height="900" src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg">
// 	// `).show()
// 	// }

// 	gallery.create(`
// 		<img width="1400" height="900" src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg">
// 	`).show()
// 	console.log(evt.target)
	
// }
