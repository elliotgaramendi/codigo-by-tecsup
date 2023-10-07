import { renderPokemonCard } from '../../utils/util.js';

const card = async () => {
  const localPokemon = document.getElementById('localPokemon');
  const remotePokemon = document.getElementById('remotePokemon');
  const spinner = document.getElementById('spinner');

  const fetchData = async (endpoint) => {
    try {
      spinner.classList.add('spinner--show');
      const response = await fetch(endpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      spinner.classList.remove('spinner--show');
    }
  };

  const [localPokemonData, remotePokemonData] = await Promise.all([fetchData('./json/pokemon-151.json'), fetchData(`https://pokeapi.co/api/v2/pokemon/${~~(Math.random() * 151 + 1)}`)]);
  renderPokemonCard(localPokemon, localPokemonData);
  renderPokemonCard(remotePokemon, remotePokemonData);

  setInterval(async () => {
    const pokemonData = await fetchData(`https://pokeapi.co/api/v2/pokemon/${~~(Math.random() * 151 + 1)}`);
    const { id, name, sprites, stats, types } = pokemonData;
    remotePokemon.innerHTML = `
      <h2 class="pokemon__title">Remote API</h2>
      <div class="pokemon__card">
        <header class="pokemon__header">
          <img src="./img/bg-pattern-card.svg" alt="Header card image" class="pokemon__header-image">
        </header>
        <section class="pokemon__body">
          <figure class="pokemon__body-image-container">
            <img src="${sprites.other['official-artwork'].front_default}"
              alt="${name}" class="pokemon__body-image" />
          </figure>
          <h2 class="pokemon__body-id">Id: ${id}</h2>
          <h1 class="pokemon__body-title">
            ${name}
          </h1>
          <p class="pokemon__body-types">${types.map(element => element.type.name).join(', ')}
          </p>
        </section>
        <footer class="pokemon__footer">
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${stats[0].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${stats[0].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${stats[1].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${stats[1].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${stats[2].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${stats[2].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${stats[3].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${stats[3].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${stats[4].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${stats[4].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${stats[5].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${stats[5].stat.name}</p>
          </div>
        </footer>
      </div>
    `;
  }, 5000);
};

export default card;