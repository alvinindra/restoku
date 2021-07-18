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

const createDetailPageTemplate = () => `
  <div class="container container--detail">
    <div class="card-detail">
      <img src="https://placehold.co/375x300?text=Contoh" class="card-detail__img" />
      <div class="card-detail__text">
        <div class="text-rating"><img src="./images/content/star-rating.png" alt="Star"><span>4.8</span></div>
        <div class="text-title">Run chicken Run - Kota Bandung</div>
        <div class="text-title--desc">Alamat :</div>
        <p class="text-desc">
          Jln. Pandeglang no 19, Medan
        </p>
        <div class="text-title--desc">Deskripsi Resto :</div>
        <p class="text-desc">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, peahaeh
        </p>
        <p class="text-desc">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, peahaeh
        </p>
        <div class="text-title--desc">Kategori :
          <span class="category">Western</span>
          <span class="category">Modern</span>
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
              <tr>
                <td>Ayam Suka Bakar Bumi</td>
              </tr>
            </table>
          </div>
          <div class="drinks">
            <table>
              <tr>
                <th>
                  Minuman
                </th>
              </tr>
              <tr>
                <td>Dalgona Milkshake</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <form class="form-review">
        <h2 class="mb-4 text-center">Ulasan</h2>
        <div class="form-review__list">
          <div class="review">
            <div class="review__name">
              Alvin Indra
            </div>
            <div class="review__desc">
              Wah tempatnya nyaman banget!
            </div>
            <div class="review__date">
              18 Juli 2021
            </div>
            <hr />
          </div>
        </div>
        <div class="mb-4">
          <input type="text" placeholder="Nama" class="form-review__input" id="inputName">
          <textarea placeholder="Tulis Ulasan" class="form-review__input" aria-label="Tulis Ulasan" id="inputReview"></textarea>
        </div>
        <button id="submit-review" type="submit" aria-label="Kirim Ulasan" class="btn btn-primary">Kirim Ulasan</button>
      </form>
    </div>
  </div>
`;

export {
  createHomePageTemplate,
  restoItemTemplate,
  createDetailPageTemplate,
};
