import RestoSource from '../../../data/resto-source';

const SendReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestoSource.reviewRestaurant(dataInput);

  const containerReview = document.querySelector('.form-review__list');
  const format = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', format);
  const newReview = `
      <div class="review">
        <div class="review__name">
          ${name}
        </div>
        <div class="review__desc">
          ${review}
        </div>
        <div class="review__date">
          ${date}
        </div>
        <hr />
      </div>
    `;
  containerReview.innerHTML += newReview;
};

export default SendReview;
