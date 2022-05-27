class MainHeader extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href=""><img class="main-logo" src="resources/logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/quienes-somos.html">Quiénes somos</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Oferta Académica
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="villamerici.html">Villa Mérici</a></li>
                                <li><a class="dropdown-item" href="experimental.html">Experimental Mérici</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="recursos.html">Recursos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contactanos.html">Contáctanos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link main-button yellow-button" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeWHOc_410wkjM2nnCO-FaZCzjThiBk1sg1ZA76eGIRzf1rAQ/viewform">Proceso de Admisión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }
  }
  
  customElements.define('main-header-component', MainHeader);