import { memes } from '../../utils/memes.js';

const searcher = () => {
  const memeSearch = document.getElementById('memesBuscador');
  const memeContainer = document.getElementById('memesMemeContainer');

  memeSearch.addEventListener('input', e => {
    memeContainer.innerHTML = '';

    if (e.target.value === '') {
      memeContainer.innerHTML = `<h2 class="memes__title">Ingrese el nombre de su meme </h2>`;
      return;
    }

    const leakedMemes = memes.filter(element => element.nombre.toLowerCase().includes(e.target.value.toLowerCase()));

    leakedMemes.forEach(element => {
      const { nombre, imagen, enlace } = element;
      memeContainer.innerHTML += `
        <div class="memes__meme">
          <figure class="memes__meme-image-container">
            <img src="${imagen}" alt="${nombre}" class="memes__meme-image" />
          </figure>
          <h3 class="memes__meme-title">${nombre}</h3>
          <a href="${enlace}" class="memes__meme-button">Ver</a>
        </div>
      `;
    });
  });
};

export default searcher;