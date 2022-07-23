import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
// Change code below this line
import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");

const markup = galleryItems
    .map((galleryIt) =>
        `<a class="gallery__link" href=${galleryIt.original}> 
                <img class="gallery__image" src =${galleryIt.preview} data-source=${galleryIt.original} alt="${galleryIt.description}"/>
            </a>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery__link", { captionSelector: "img", captionsData: "alt", captionPosition: "bottom", captionDelay: 250 });

// gallery.addEventListener('click', showImage);

// function showImage(event) {

//     event.preventDefault();

//     const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`,{	
//         onShow: (instance) => {
//             document.addEventListener('keydown', onEsc)
//         },
    
	
//         onClose: (instance) => {
//         document.removeEventListener('keydown',onEsc)
//     }});
//     function onEsc(event) {
//         console.log(event.key)
//      if (event.key === "Escape") {
//         instance.close();
//         console.log (event.key)
//     }
   
//   }
    
// if (event.target.classList.contains("gallery__image")) {
//         instance.show();
//         console.log (event)
//     }
// } 
// console.log(galleryItems);
