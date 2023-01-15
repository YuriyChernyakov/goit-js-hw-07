import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const picturesAll = document.querySelector('.gallery')

const createNewGallery = (elements) => {
    return elements.map(({preview, original, description}) => {
        const newDiv = 
        `<div>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`;
        picturesAll.insertAdjacentHTML(`afterbegin`, newDiv);
    })
}
createNewGallery(galleryItems);

const clickImg = event => {
    event.preventDefault();
    const bigPictures = event.target.dataset.source;
    if (event.target.nodeName !== `IMG`) { return };
    const instance = basicLightbox.create(`<img src="${bigPictures}" width="800" height="600">`)
    instance.show();
}

const clickCLose = event => {
    if (event.code === 'Escape') {
        instance.close(() => {
            document.removeEventListener('keydown', clickCLose);
            picturesAll.removeEventListener('click', clickCLose)
        });
        }}
picturesAll.addEventListener('click', clickImg);