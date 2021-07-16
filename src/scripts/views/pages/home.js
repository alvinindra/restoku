import RestaurantSource from '../../data/resto-source';
import { createHomePageTemplate, restoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return createHomePageTemplate();
  },

  async afterRender() {
    const restoList = document.querySelector('#resto-list');

    try {
      const resto = await RestaurantSource.listRestaurant();
      resto.restaurants.forEach((restaurant) => {
        restoList.innerHTML += restoItemTemplate(restaurant);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Home;
