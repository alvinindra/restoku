import FavRestoIdb from '../src/scripts/data/resto-idb';
import * as TestFactories from './helper/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  afterEach(async () => {
    await FavRestoIdb.deleteAllResto();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorResto({ id: 1 });

    expect(document.querySelector('[aria-label="Favoritkan Resto Ini"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorResto({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus Dari Favorit Resto Ini"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonInitiatorResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavRestoIdb.getResto(1);

    expect(restaurant).toEqual({ id: 1 });
    FavRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonInitiatorResto({ id: 1 });

    await FavRestoIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant again when its does not have id', async () => {
    await TestFactories.createLikeButtonInitiatorResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavRestoIdb.getAllResto()).toEqual([]);
  });
});
