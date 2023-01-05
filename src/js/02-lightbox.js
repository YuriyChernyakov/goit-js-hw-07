import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const picturesAll = document.querySelector('.gallery')

const createNewGallery = (elements) => {
    return elements.map(({preview, original, description}) => {
        const newDiv = 
        `<li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </li>`;
        picturesAll.insertAdjacentHTML(`afterbegin`, newDiv);
    })
}
createNewGallery(galleryItems);

let clickImg = event => {
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay:250});
}
picturesAll.addEventListener('click', clickImg);