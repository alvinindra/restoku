import FavRestoIdb from '../../data/resto-idb';
import { createFavoritePageTemplate, restoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return createFavoritePageTemplate();
  },

  async afterRender() {
    const data = await FavRestoIdb.getAllResto();
    const listContainer = document.querySelector('#listFavorite');
    if (data.length === 0) {
      listContainer.innerHTML = `
        Kamu belum memiliki restoran favorit
      `;
    }
    const totalRest = data.length;
    data.forEach((restaurant, index) => {
      listContainer.innerHTML += restoItemTemplate(restaurant, index, totalRest);
    });
  },
};

export default Favorite;
