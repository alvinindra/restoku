import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavRestoIdb from '../../src/scripts/data/resto-idb';

const createLikeButtonInitiatorResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavRestoIdb,
    resp: {
      restaurant,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonInitiatorResto };
