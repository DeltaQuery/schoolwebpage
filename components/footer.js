class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class ="container-fluid">
      <div class ="row d-flex align-items-center justify-content-center footer-upper">
          <div class ="col-12 col-lg-4 d-flex align-items-center justify-content-center footer-upper__logo">
              <img class="main-logo" src="/resources/logofooter.png" alt="">
          </div>
          <div class="col-12 col-lg-4 ps-5 pe-5 ps-lg-0 pe-lg-0 mt-4 mt-lg-0 d-flex flex-column footer-upper__contact">
              <p>Contacto</p>
              <ul class ="footer__list">
                  <li>(+58) 424 6114517</li>
                  <li>Lun – Vie 8:00am – 12:30pm</li>
                  <li>Urb. Sucre, Calle 64. “Instituto Villa Mérici”.</li>
                  <li>Urb. Sucre, Calle 63. “Instituto Experimental Mérici”</li>
              </ul>
          </div>
          <div class ="col-12 col-lg-4 ps-5 pe-5 ps-lg-0 pe-lg-0 d-flex flex-column footer-upper__menu">
              <p>Menú</p>
              <ul class ="footer__list">
                  <li>
                      <a href="/">INICIO</a>
                  </li>
                  <li>
                      <a href="/quienes-somos">QUIÉNES SOMOS</a>
                  </li>
                  <li>
                      <a href="/villamerici">VILLA MÉRICI</a>
                  </li>
                  <li>
                      <a href="/experimental">EXPERIMENTAL MÉRICI</a>
                  </li>
                  <li>
                      <a href="/recursos">RECURSOS</a>
                  </li>
                  <li>
                      <a href="/contactanos">CONTÁCTANOS</a>
                  </li>
              </ul>
          </div>
      </div>
      <div class ="row mt-4 mt-lg-0 ps-5 pe-5 ps-lg-0 pe-lg-0 footer-bottom">
          <p style = "text-align: center;">Copyright © 2021 Colegios Mérici | Desarrollado por @cebracho94@gmail.com</p>
      </div>
  </footer>
       `;
    }
  }
  
  customElements.define('footer-component', Footer);