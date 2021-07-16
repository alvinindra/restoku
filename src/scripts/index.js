/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.scss';
import './views/resto-list';

import App from './views/app';

const app = new App({
  button: document.querySelector('#openNav'),
  closeButton: document.querySelector('#closeNav'),
  drawer: document.querySelector('#sideNav'),
  content: document.querySelector('#mainContent'),
});
