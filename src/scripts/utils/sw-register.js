import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('../workbox-sw.js');
    workbox.register();
  }
};

export default swRegister;
