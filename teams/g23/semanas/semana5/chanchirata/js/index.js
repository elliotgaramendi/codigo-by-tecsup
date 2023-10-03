'use strict';

import { comidas } from '../db/comidas.js';

document.addEventListener('DOMContentLoaded', () => {
  const foodContainer = document.getElementById('foodContainer');
  comidas.forEach(element => {
    const { id, title, description, urlImage, urlRecipe, tags } = element;
    foodContainer.innerHTML += `
      <div class="col" key="${id}">
        <div class="card h-100 shadow-sm">
          <img src="${urlImage}"
            alt="${title}" class="w-100 card-img-top object-fit-cover d-block" width="455" height="256"
            style="height: 256px;" />
          <div class="card-body d-flex flex-column">
            <h2 class="card-title">${title}</h2>
            <p class="card-text">${description}</p>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <div class="btn-group">
                <a href="${urlRecipe}" class="btn btn-sm btn-outline-secondary">Receta</a>
                <a href="#" class="btn btn-sm btn-outline-secondary">Secretos</a>
              </div>
              <small class="text-body-secondary">${tags.join(', ')}</small>
            </div>
          </div>
        </div>
      </div>
    `;
  });
});