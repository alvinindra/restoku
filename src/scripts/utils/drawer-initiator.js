const DrawerInitiator = {
  init({
    button, closeButton, drawer, content, body,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, body);
    });

    closeButton.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, body);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, body);
    });
  },

  _toggleDrawer(event, drawer, body) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    body.classList.toggle('overlay');
  },

  _closeDrawer(event, drawer, body) {
    event.stopPropagation();
    drawer.classList.remove('open');
    body.classList.toggle('overlay');
  },
};

export default DrawerInitiator;
