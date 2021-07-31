const assert = require('assert');

Feature('Unfavorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'Kamu belum memiliki restoran favorit';

Scenario('unfavorite one restaurant', async ({ I }) => {
  I.see(firstCondition, '#listFavorite');

  I.amOnPage('/');

  I.seeElement('.card-resto');
  const firstCard = locate('.card-title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-resto');
  const likedCardTitle = await I.grabTextFrom('.card-title');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#listFavorite');
  const noFavRestaurant = await I.grabTextFrom('#listFavorite');

  assert.strictEqual(noFavRestaurant, firstCondition);
});
