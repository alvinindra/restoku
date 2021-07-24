class Footbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
          <ul>
              <li>
                  Copyright © 2021 - Restoku
              </li>
              <li>
                  Dibuat oleh Alvin Indra Pratama
              </li>
          </ul>
      </footer>
    `;
  }
}

customElements.define('footer-bar', Footbar);
