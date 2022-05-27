class ReviewsCarousel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <div class="">
        <main class="main-content">

        </main>
        <div class="reviews__slider">
            <div class="reviews__container">
                <button aria-label="Anterior" class="reviews__anterior"><i class="fa-solid fa-chevron-left fa-2xl" style="color: var(--yellow-font-color);"></i></button>

                <div class="reviews__list">
                    <div class="reviews__element">
                    <div class="testimony__element">
                    <p>
                        Años excelentes, donde crecí como persona y profesional. Mérici nos
                        acogió y educó con amor y dedicación.
                    </p>
                </div>
                <div class="social-proof__info">
                    <div class="social-proof__photo"><img src="/resources/social-proof/victorfigueredo.jpeg"
                            alt=""></div>
                    <div class="social-proof__name">
                        <p>Victor Figueredo</p>
                        <p>Ex alumno</p>
                    </div>
                </div>
                    </div>


                    <div class="reviews__element social-card">
                    <div class="testimony__element">
                    <p>
                    Mi experiencia fue excelente. Es un instituto ideal en cuanto a calidad académica e instalaciones.
                    </p>
                </div>
                <div class="social-proof__info">
                    <div class="social-proof__photo"><img src="/resources/social-proof/juanduran.jpeg"
                            alt=""></div>
                    <div class="social-proof__name">
                        <p>Juan Durán</p>
                        <p>Ex alumno</p>
                    </div>
                </div>
                    </div>


                    <div class="reviews__element">
                    <div class="testimony__element">
                    <p>
                    Excelente experiencia académica en el tiempo que estuve. Excelentes profesores y directores. Me daba felicidad participar.
                    </p>
                </div>
                <div class="social-proof__info">
                    <div class="social-proof__photo"><img src="/resources/social-proof/anamoreno.jpeg"
                            alt=""></div>
                    <div class="social-proof__name">
                        <p>Ana Moreno</p>
                        <p>Ex alumna</p>
                    </div>
                </div>
                    </div>


                    <div class="reviews__element">
                    <div class="testimony__element">
                    <p>
                    Fue una gran experiencia. Muy buenos docentes, tanto así que mi hijo va a estudiar ahí. ¡Gracias Mérici! Saludos.
                    </p>
                </div>
                <div class="social-proof__info">
                    <div class="social-proof__photo"><img src="/resources/social-proof/giovannisanchez.jpeg"
                            alt=""></div>
                    <div class="social-proof__name">
                        <p>Giovanni Sánchez</p>
                        <p>Ex alumno</p>
                    </div>
                </div>
                    </div>


                    <div class="reviews__element">
                    <div class="testimony__element">
                    <p>
                    Soy Mérici, gran parte de lo que soy como persona y profesional es gracias a ti Mérici. Me formaste y viste crecer.
                    </p>
                </div>
                <div class="social-proof__info">
                    <div class="social-proof__photo"><img src="/resources/social-proof/susanaflores.jpeg"
                            alt=""></div>
                    <div class="social-proof__name">
                        <p>Susana Flores</p>
                        <p>Ex alumna</p>
                    </div>
                </div>
                    </div>


                    <div class="reviews__element">
                    <div class="testimony__element">
                    <p>
                    Años excelentes, donde crecí como persona y profesional. Mérici nos acogió y educó con amor y dedicación.
                    </p>
                </div>
                <div class="social-proof__info">
                    <div class="social-proof__photo"><img src="/resources/social-proof/patriciacubillan.jpeg"
                            alt=""></div>
                    <div class="social-proof__name">
                        <p>Patricia Cubillán</p>
                        <p>Ex alumna</p>
                    </div>
                </div>
                    </div>
                    

                    <div class="reviews__element">
                    <div class="testimony__element">
                    <p>
                    Estudiar en el Mérici fue grato y estimulante. Personal docente capacitado y un programa de estudios muy completo.
                    </p>
                </div>
                <div class="social-proof__info">
                    <div class="social-proof__photo"><img src="/resources/social-proof/gabrielrodriguez.jpeg"
                            alt=""></div>
                    <div class="social-proof__name">
                        <p>Gabriel Rodríguez</p>
                        <p>Ex alumno</p>
                    </div>
                </div>
                    </div>


                    <div class="reviews__element">
                    <div class="testimony__element">
                    <p>
                    En el tiempo que estuve crecí como profesional y me encontré un ambiente genial, tanto colegas como alumnado.
                    </p>
                </div>
                <div class="social-proof__info">
                    <div class="social-proof__photo"><img src="/resources/social-proof/simonetvillarroel.webp"
                            alt=""></div>
                    <div class="social-proof__name">
                        <p>Simonet Villarroel</p>
                        <p>Ex profesora</p>
                    </div>
                </div>
                    </div>



                    <div class="reviews__element">
                    <div class="testimony__element">
                    <p>
                    Grata experiencia en mis años de estudiante, gran nivel académico, profesores y directores. ¡Gracias!
                    </p>
                </div>
                <div class="social-proof__info">
                    <div class="social-proof__photo"><img src="/resources/social-proof/gerardorincon.webp"
                            alt=""></div>
                    <div class="social-proof__name">
                        <p>Gerardo Rincón</p>
                        <p>Ex alumno</p>
                    </div>
                </div>
                    </div>



                </div>

                <button aria-label="Siguiente" class="reviews__siguiente"><i class="fa-solid fa-chevron-right fa-2xl" style="color: var(--yellow-font-color);"></i></button>
            </div>

            <div role="tablist" class="reviews__indicators"></div>
        </div>
    </div>
       `;
    }
}

customElements.define('reviews-carousel-component', ReviewsCarousel);