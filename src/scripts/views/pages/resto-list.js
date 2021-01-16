fetch("data-resto.json")
  .then((response) => response.json())
  .then((data) => {
    getRestaurants(data);
  });

function getRestaurants(data) {
  const content = document.querySelector('#resto-list')
  const resto = data.restaurants
  resto.forEach(restoItem => {
    content.innerHTML +=  
      `<div tabindex="0" class="card-resto">
        <div class="card-cover">
          <img class="card-cover__img" draggable="false" src="${restoItem.pictureId}" alt="${restoItem.name}">
          <div class="card-cover__rating"><img src="./images/content/star-rating.png" alt="Star"><span>${restoItem.rating}</span></div>
        </div>
        <div class="card-desc">
          <h3 class="card-title mx-3">${restoItem.name}</h3>
          <p class="card-desc__text">
            ${restoItem.description.slice(0,200)}
          </p>
        </div>
      </div>`
  })
}