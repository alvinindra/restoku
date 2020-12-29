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
      `<a tabindex="0" class="card-resto" href="/detail.html?id=${restoItem.id}">
        <img src="${restoItem.pictureId}" class="card-resto__image" alt="${restoItem.name}">
        <div class="card-desc">
          <h3 class="mx-3">${restoItem.name}</h3>
          <p>
            ${restoItem.description.slice(0,150)}
          </p>
        </div>
      </a>`
  })
}