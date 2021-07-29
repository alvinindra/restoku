import FavRestoIdb from '../src/scripts/data/resto-idb';
import * as TestFactories from './helper/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavRestoIdb.deleteResto(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorResto({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus Dari Favorit Resto Ini"]')).toBeTruthy();
  });

  it('should not display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorResto({ id: 1 });

    expect(document.querySelector('[aria-label="Favoritkan Resto Ini"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonInitiatorResto({ id: 1 });

    document
      .querySelector('[aria-label="Hapus Dari Favorit Resto Ini"]')
      .dispatchEvent(new Event('click'));

    expect(await FavRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorResto({ id: 1 });

    await FavRestoIdb.deleteResto(1);
    document
      .querySelector('[aria-label="Hapus Dari Favorit Resto Ini"]')
      .dispatchEvent(new Event('click'));

    expect(await FavRestoIdb.getAllResto()).toEqual([]);
  });
});
