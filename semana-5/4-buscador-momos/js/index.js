'use strict';
import { momos } from "../utils/momos.js";
console.log(momos);

const documentReady = () => {
  const momazosBuscador = document.querySelector('#momazosBuscador');
  const momazosMemeContainer = document.querySelector('#momazosMemeContainer');

  const buscadorMomo = (e) => {
    if (e.target.value === '') {
      momazosMemeContainer.innerHTML = '';
      return
    }
    momazosMemeContainer.innerHTML = '';
    
    const momosBuscados = momos.filter((element) => {
      return (element.nombre.toLowerCase().includes(e.target.value.toLowerCase()));
    });

    momosBuscados.forEach((element) => {
      momazosMemeContainer.innerHTML += `
      <div class="momazos__meme">
        <figure class="momazos__meme-image-container">
          <img src="${element.imagen}" alt="${element.nombre}" class="momazos__meme-image" />
        </figure>
        <h3 class="momazos__meme-title">${element.nombre}</h3>
        <a href="${element.enlace}" class="momazos__meme-button">Ver</a>
      </div>
    `
    });
  };

  momazosBuscador.addEventListener('keyup', buscadorMomo);
}

document.addEventListener('DOMContentLoaded', documentReady);