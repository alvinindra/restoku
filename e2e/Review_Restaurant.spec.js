Feature('Review a Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card-resto');

  const restaurantTest = locate('.card-resto').first();
  I.click(restaurantTest);
});

const nameReviewer = 'UserTest';
const textReviewer = 'ReviewTest';

Scenario('User review a restaurant', async ({ I }) => {
  I.seeElement('.form-review__list');
  I.seeElement('.form-review');
  I.fillField('#inputName', nameReviewer);
  I.fillField('#inputReview', textReviewer);
  I.click('#sendReview');

  I.seeElement(locate('.review__name').last().withText(nameReviewer));
  I.seeElement(locate('.review__desc').last().withText(textReviewer));
});

const warningPost = 'Input tidak boleh kosong';

Scenario('User review a restaurant without name and review', async ({ I }) => {
  I.seeElement('.form-review__list');
  I.seeElement('.form-review');
  I.click('#sendReview');

  I.seeElement(locate('#warningPost').withText(warningPost));
});
