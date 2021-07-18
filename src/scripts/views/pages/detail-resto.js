import { createDetailPageTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return createDetailPageTemplate();
  },

  async afterRender() {
    // Nanti
  },
};

export default Detail;
