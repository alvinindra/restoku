/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createHomePageTemplate = () => `
  <div class="hero">
    <div class="container">
        <div class="hero-content">
            <img class="hero-content__logo" src="./images/logo/logo-restoku-white.svg" alt="Logo Restoku" crossorigin="anonymous">
            <h1 class="hero-content__title">Bergabung bersama kami dan tingkatkan penjualanmu</h1>
            <a href="#section-two" class="mt-3 btn btn-white">Jelajahi Sekarang</a>
        </div>
    </div>
  </div>

  <div class="section-two mb-5" id="section-two">
    <div class="container title-section mb-5">
        <img src="./images/logo/logo-restoku.svg" width="200" alt="Logo Restoku" crossorigin="anonymous">
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
          <img class="resto-cover__img" src="./images/content/resto-cover-img.png" alt="Company Restoku" crossorigin="anonymous">
      </div>
    </div>
  </div>

  <div id="section-three" class="section-three bg-main">
      <div class="waves-container text-center">
          <img class="waves-2" src="./images/waves/waves.jpg" alt="" crossorigin="anonymous">
          <h1 class="title-section">Daftar Restoran</h1>
      </div>
      <div class="list-resto bg-main">
          <div class="container list-resto__container" id="resto-list">
          </div>
      </div>
  </div>
`;

const restoItemTemplate = (restoItem) => `
  <a href="#/detail/${restoItem.id}" tabindex="0" class="card-resto">
    <div class="card-cover">
      <img class="card-cover__img" draggable="false" src="${CONFIG.BASE_IMAGE_URL + restoItem.pictureId}" alt="${restoItem.name}" crossorigin="anonymous">
      <div class="card-cover__rating"><img src="./images/content/star-rating.png" alt="Star" crossorigin="anonymous"><span>${restoItem.rating}</span></div>
      <div class="card-cover__city">${restoItem.city}</div>
    </div>
    <div class="card-desc">
      <h3 class="card-title mx-3">${restoItem.name}</h3>
      <p class="card-desc__text">
        ${restoItem.description.slice(0, 197)}...
      </p>
    </div>
  </a>
`;

const createDetailPageTemplate = () => `
  <div class="container container--detail">
    <div id="cardDetail"></div>
    <div id="likeButtonContainer"></div>
  </div>
`;

const restoDetailTemplate = (resto) => `
  <div class="card-detail">
    <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" class="card-detail__img" alt="${resto.name}" crossorigin="anonymous" />
    <div class="card-detail__text">
      <div class="text-rating"><img src="./images/content/star-rating.png" alt="Star" crossorigin="anonymous"><span>${resto.rating}</span></div>
      <div class="text-title">${resto.name} - Kota ${resto.city}</div>
      <div class="text-title--desc">Alamat :</div>
      <p class="text-desc">
        ${resto.address}
      </p>
      <div class="text-title--desc">Deskripsi Resto :</div>
      <p class="text-desc">
        ${resto.description}
      </p>
      <div class="text-title--desc">Kategori :
        ${resto.categories.map((category) => `<span class="category">${category.name}</span>`).join('')}
      </div>
    </div>
  </div>

  <div class="card-grid">
    <div class="card-menu">
      <h2 class="text-center mb-4">
        Menu
      </h2>

      <div class="card-menu__list">
        <div class="foods">
          <table>
            <tr>
              <th>
                Makanan
              </th>
            </tr>
            ${resto.menus.foods.map((food) => `<tr><td>${food.name}</td></tr>`).join('')}
          </table>
        </div>
        <div class="drinks">
          <table>
            <tr>
              <th>
                Minuman
              </th>
            </tr>
            ${resto.menus.drinks.map((drink) => `<tr><td>${drink.name}</td></tr>`).join('')}
          </table>
        </div>
      </div>
    </div>

    <div class="form-review">
      <h2 class="mb-4 text-center">Ulasan</h2>
      <div class="form-review__list">
        ${resto.customerReviews.map((review) =>
          `<div class="review">
            <div class="review__name">
              ${review.name}
            </div>
            <div class="review__desc">
              ${review.review}
            </div>
            <div class="review__date">
            ${review.date}
            </div>
            <hr />
          </div>
        `).join('')}
      </div>
      <div class="mb-3">
        <input type="text" placeholder="Nama" class="form-review__input" aria-label="Tulis Nama" id="inputName">
        <textarea placeholder="Tulis Ulasan" class="form-review__input" aria-label="Tulis Ulasan" id="inputReview"></textarea>
      </div>
      <div class="mb-3" id="warningPost"></div>
      <button id="sendReview" aria-label="Kirim Ulasan" class="btn btn-primary mt-3">Kirim Ulasan</button>
    </div>
  </div>
`;

const createFavoritePageTemplate = () => `
  <div class="container container--favorite">
    <h2 class="title-container">Restoran Favorit</h2>
    <section class="list-favorite" id="listFavorite"></section>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="Favoritkan Resto Ini" id="likeButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Hapus Dari Favorit Resto Ini" id="likeButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createHomePageTemplate,
  restoItemTemplate,
  createDetailPageTemplate,
  restoDetailTemplate,
  createFavoritePageTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
