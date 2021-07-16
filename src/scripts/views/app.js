import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, closeButton, drawer, content,
  }) {
    this._button = button;
    this._closeButton = closeButton;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      closeButton: this._closeButton,
      drawer: this._drawer,
      content: this._content,
    });
    // kita bisa menginisiasikan komponen lain bila ada
  }
}

export default App;
