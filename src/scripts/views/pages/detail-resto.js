import '../components/loading';
import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createDetailPageTemplate, restoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import SendReview from '../components/detail/post-review';
import FavRestoIdb from '../../data/resto-idb';

const Detail = {
  async render() {
    return createDetailPageTemplate();
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const containerDetail = document.querySelector('#cardDetail');
    const loading = document.querySelector('loading-indicator');
    document.querySelector('header').scrollIntoView();

    try {
      const resp = await RestoSource.detailRestaurant(url.id);
      containerDetail.innerHTML += restoDetailTemplate(resp.restaurant);

      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteResto: FavRestoIdb,
        resp,
      });

      loading.style.display = 'none';

      const btnSend = document.querySelector('#sendReview');
      const inputName = document.querySelector('#inputName');
      const inputReview = document.querySelector('#inputReview');
      const warningPost = document.querySelector('#warningPost');
      const formContainer = document.querySelector('#formContainer');
      if (window.navigator.onLine) {
        formContainer.style.display = 'block';
        warningPost.style.display = 'none';
      } else {
        formContainer.style.display = 'none';
        warningPost.style.display = 'block';
        warningPost.innerHTML = 'Karena Anda sedang offline fitur review tidak tersedia';
      }
      warningPost.style.display = 'none';

      btnSend.addEventListener('click', (event) => {
        event.preventDefault();
        if (inputName.value === '' || inputReview.value === '') {
          warningPost.style.display = 'block';
          warningPost.innerHTML = 'Input tidak boleh kosong';
          inputName.value = '';
          inputReview.value = '';
        } else {
          SendReview(url, inputName.value, inputReview.value);
          warningPost.style.display = 'none';
          inputName.value = '';
          inputReview.value = '';
        }
      });
    } catch (error) {
      containerDetail.innerHTML = `Error: ${error}, muat ulang halaman!`;
      loading.style.display = 'none';
    }
  },
};

export default Detail;
