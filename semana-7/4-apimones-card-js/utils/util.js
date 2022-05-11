export const renderPokemon = (element, name, src) => {
  const fragment = document.createDocumentFragment();

  const cardPokemon = document.createElement('div');
  cardPokemon.classList.add('card__pokemon');

  const namePokemon = document.createElement('h3');
  namePokemon.textContent = name;
  namePokemon.classList.add('card__pokemon-name');

  const imageContainerPokemon = document.createElement('figure');
  imageContainerPokemon.classList.add('card__pokemon-image-container');

  const imagePokemon = document.createElement('img');
  imagePokemon.setAttribute('src', src);
  imagePokemon.setAttribute('alt', name);
  imagePokemon.classList.add('card__pokemon-image');

  cardPokemon.appendChild(namePokemon);
  imageContainerPokemon.appendChild(imagePokemon);
  cardPokemon.appendChild(imageContainerPokemon);
  fragment.appendChild(cardPokemon);

  element.appendChild(fragment);
};