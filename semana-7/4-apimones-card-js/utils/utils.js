export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
};

export const fetchApi = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { method: 'GET' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const renderCard = (domElement, pokemon) => {
  let tipos = '';
  console.log();
  domElement.innerHTML = `
    <div class="card__container">
      <header class="card__header">
        <img src="./img/bg-pattern-card.svg" alt="Header card image" class="card__header-image">
      </header>
      <section class="card__body">
        <figure class="card__body-image-container">
          <img src="${pokemon.sprites.other['official-artwork'].front_default}"
            alt="${pokemon.name}" class="card__body-image" />
        </figure>
        <h2 class="card__body-id">Id: ${pokemon.id}</h2>
        <h1 class="card__body-title">
          ${pokemon.name}
        </h1>
        <p class="card__body-types">${pokemon.types.map(element => element.type.name).join(', ')}
        </p>
      </section>
      <footer class="card__footer">
        <div class="card__footer-stats">
          <h3 class="card__footer-stats-base">${pokemon.stats[0].base_stat}</h3>
          <p class="card__footer-stats-name">${pokemon.stats[0].stat.name}</p>
        </div>
        <div class="card__footer-stats">
          <h3 class="card__footer-stats-base">${pokemon.stats[1].base_stat}</h3>
          <p class="card__footer-stats-name">${pokemon.stats[1].stat.name}</p>
        </div>
        <div class="card__footer-stats">
          <h3 class="card__footer-stats-base">${pokemon.stats[2].base_stat}</h3>
          <p class="card__footer-stats-name">${pokemon.stats[2].stat.name}</p>
        </div>
        <div class="card__footer-stats">
          <h3 class="card__footer-stats-base">${pokemon.stats[3].base_stat}</h3>
          <p class="card__footer-stats-name">${pokemon.stats[3].stat.name}</p>
        </div>
        <div class="card__footer-stats">
          <h3 class="card__footer-stats-base">${pokemon.stats[4].base_stat}</h3>
          <p class="card__footer-stats-name">${pokemon.stats[4].stat.name}</p>
        </div>
        <div class="card__footer-stats">
          <h3 class="card__footer-stats-base">${pokemon.stats[5].base_stat}</h3>
          <p class="card__footer-stats-name">${pokemon.stats[5].stat.name}</p>
        </div>
      </footer>
    </div>
  `;

};