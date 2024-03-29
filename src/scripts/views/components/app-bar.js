class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="nav">
          <div class="nav-mobile">
              <div class="nav-logo">
                  <a href="/" class="nav-logo__restoku">
                      <img src="./images/logo/logo-restoku.svg" alt="Logo Restoku" crossorigin="anonymous">
                  </a>
              </div>
          </div>
          <ul class="nav-list">
              <li class="nav-item"><a href="#/home">Beranda</a></li>
              <li class="nav-item"><a href="#/favorite">Favorit</a></li>
              <li class="nav-item">
                  <a href="https://www.linkedin.com/in/alvinindra/" target="_blank" rel="noopener noreferrer">Tentang
                      Kami</a>
              </li>
          </ul>
          <a id="openNav" href="javascript:void(0)" aria-label="button open sidebar" class="open-nav">&#9776;</a>
          <div id="sideNav" class="sidenav-list">
              <a id="closeNav" aria-label="button close sidebar" href="javascript:void(0)"
                  class="sidenav-list__close">&times;</a>
              <a href="#/home">Beranda</a>
              <a href="#/favorite">Favorit</a>
              <a href="https://www.linkedin.com/in/alvinindra/" target="_blank" rel="noopener noreferrer">Tentang
                  Kami</a>
          </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
