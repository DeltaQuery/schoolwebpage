class GalleryCarousel extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="">
        <main class="main-content">

        </main>
        <div class="gallery__slider">
            <div class="gallery__container">
                <button aria-label="Anterior" class="gallery__anterior"><i class="fa-solid fa-chevron-left fa-2xl" style="color: var(--blue-font-color);"></i></button>

                <div class="gallery__list">
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img1.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img2.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img3.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img4.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img5.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img6.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img7.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img8.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img9.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img10.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img11.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img12.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img13.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img14.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img15.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img16.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img17.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img18.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img19.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element"> 
                        <img src="/resources/gallery/gallery_img20.jpg" alt="" class="src" loading="lazy">
                    </div>
                    <div class="gallery__element">
                        <img src="/resources/gallery/gallery_img21.jpg" alt="" class="src" loading="lazy">
                    </div>
                </div>

                <button aria-label="Siguiente" class="gallery__siguiente"><i class="fa-solid fa-chevron-right fa-2xl" style="color: var(--blue-font-color);"></i></button>
            </div>

            <div role="tablist" class="gallery__indicators"></div>
        </div>
    </div>
       `;
    }
  }
  
  customElements.define('gallery-carousel-component', GalleryCarousel);

