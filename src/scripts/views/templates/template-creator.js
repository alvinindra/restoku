import CONFIG from '../../globals/config';

const createHomePageTemplate = () => `
  <div class="hero">
    <div class="container">
        <div class="hero-content">
            <img class="hero-content__logo" src="./images/logo/logo-restoku-white.svg" alt="Logo Restoku">
            <h1 class="hero-content__title">Bergabung bersama kami dan tingkatkan penjualanmu</h1>
            <a href="#section-two" class="mt-3 btn btn-white">Jelajahi Sekarang</a>
        </div>
    </div>
  </div>

  <div class="section-two mb-5" id="section-two">
    <div class="container title-section mb-5">
        <img src="./images/logo/logo-restoku.svg" width="200" alt="Logo Restoku">
    </div>
    <div class="container resto-content">
      <div class="resto-content__desc">
          <h2 class="mb-4">Apa Itu Restoku?</h2>
          <p>Restoku adalah aplikasi dimana para toko bisa berjualan dengan mudah melalui platform ini. Para
              toko telah lama bekerja sama dengan Restoku selama 5 tahun.</p><br>
          <p>Berdirinya aplikasi ini agar para pemilik toko bisa dengan mudah berjualan daring dan langsung
              dengan bantuan Restoku.</p><br>
          <p>Awal mula terbangunnya Restoku pada tahun 2016. Kami meneliti tentang bagaimana para pemilik toko
              yang mengeluhkan hasil dagangannya tidak laris.
              Hingga kamipun mengembangkan aplikasi ini untuk membantu permasalahan para pemilik toko agar
              jualannya menjadi laris.
          </p>
      </div>
      <div class="resto-cover">
          <img class="resto-cover__img" src="./images/content/resto-cover-img.png" alt="Company Restoku">
      </div>
    </div>
  </div>

  <div id="section-three" class="section-three bg-main">
      <div class="waves-container text-center">
          <img class="waves-2" src="./images/waves/waves.jpg" alt="">
          <h1 class="title-section">Daftar Restoran</h1>
      </div>
      <div class="list-resto bg-main">
          <div class="container list-resto__container" id="resto-list">
          </div>
      </div>
  </div>
`;

const restoItemTemplate = (restoItem) => `
  <div tabindex="0" class="card-resto">
    <div class="card-cover">
      <img class="card-cover__img" draggable="false" src="${CONFIG.BASE_IMAGE_URL + restoItem.pictureId}" alt="${restoItem.name}">
      <div class="card-cover__rating"><img src="./images/content/star-rating.png" alt="Star"><span>${restoItem.rating}</span></div>
      <div class="card-cover__city">${restoItem.city}</div>
    </div>
    <div class="card-desc">
      <h3 class="card-title mx-3">${restoItem.name}</h3>
      <p class="card-desc__text">
        ${restoItem.description.slice(0, 197)}...
      </p>
    </div>
  </div>
`;

export {
  createHomePageTemplate,
  restoItemTemplate,
};
