import '../components/loading';
import RestaurantSource from '../../data/resto-source';
import { createHomePageTemplate, restoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return createHomePageTemplate();
  },

  async afterRender() {
    const restoList = document.querySelector('#resto-list');
    const loading = document.querySelector('loading-indicator');

    try {
      const resto = await RestaurantSource.listRestaurant();
      resto.restaurants.forEach((restaurant) => {
        restoList.innerHTML += restoItemTemplate(restaurant);
      });
      loading.style.display = 'none';
    } catch (error) {
      restoList.innerHTML = `Error: ${error}, muat ulang halaman!`;
      loading.style.display = 'none';
    }
  },
};

export default Home;
