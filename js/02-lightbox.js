import { galleryItems } from './gallery-items.js';
// Ваш код
<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src="small-image.jpg"
            data-source="large-image.jpg"
            alt="Image description"
        />
    </a>
</li>

console.log(galleryItems);