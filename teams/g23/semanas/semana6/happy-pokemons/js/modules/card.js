import { renderPokemonCard } from '../../utils/util.js';

const card = async () => {
  const localPokemon = document.getElementById('localPokemon');
  const remotePokemon = document.getElementById('remotePokemon');

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Fin de Data Fetching');
    }
  };

  const [localPokemonData, remotePokemonData] = await Promise.all([fetchData('./json/pokemon-151.json'), fetchData(`https://pokeapi.co/api/v2/pokemon/${~~(Math.random() * 151 + 1)}`)]);
  renderPokemonCard(localPokemon, localPokemonData);
  renderPokemonCard(remotePokemon, remotePokemonData);
};

export default card;