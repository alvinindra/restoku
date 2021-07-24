import 'regenerator-runtime';
import '../styles/main.scss';
import './views/components/app-bar';
import './views/components/footer-bar';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#openNav'),
  closeButton: document.querySelector('#closeNav'),
  drawer: document.querySelector('#sideNav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('header').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
