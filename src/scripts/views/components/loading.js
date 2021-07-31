import { createLoadingTemplate } from '../templates/template-creator';

class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.innerHTML = createLoadingTemplate();
  }
}

customElements.define('loading-indicator', LoadingIndicator);
