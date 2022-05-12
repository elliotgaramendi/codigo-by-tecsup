// import { fetchApi, renderCard } from "../utils/util.js";
// import { renderPokemon } from "../utils/util.js";

import { setLoading } from "../utils/util.js";

const card = async () => {

  setLoading(true);
  setTimeout(() => setLoading(false), 5000);

  // const pokemonLocal = document.getElementById('pokemonLocal');
  // const pokemonRemote = document.getElementById('pokemonRemote');

  // const [localData, remoteData] = await fetchApi('https://elliotxleo.github.io/api-json-public/json/pokeapi-api-v2-pokemon-25.json', 'https://pokeapi.co/api/v2/pokemon/25');

  // renderCard(pokemonLocal, localData);
  // renderCard(pokemonRemote, remoteData);

  // fetch('https://elliotxleo.github.io/api-json-public/json/pokeapi-api-v2-pokemon-25.json')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     renderCard(pokemonLocal, data);
  //   });

  // const consultarAPI = async () => {
  //   const api = await fetch('https://pokeapi.co/api/v2/pokemon/25');
  //   const data = await api.json();
  //   renderCard(pokemonRemote, data);
  // };
  // consultarAPI();

  // const pokemonPokemonLocal = await fetchApi('https://elliotxleo.github.io/api-json-public/json/pokeapi-api-v2-pokemon-25.json');
  // const pokemonPokemonRemote = await fetchApi('https://pokeapi.co/api/v2/pokemon/25');
  // renderCard(pokemonLocal, pokemonPokemonLocal);
  // renderCard(pokemonRemote, pokemonPokemonRemote);

  // const fetchApi = async () => {
  //   document.getElementById('spinner').classList.remove('spinner--hidden');
  //   try {
  //     const response = await fetch('http://127.0.0.1:5500/semana-7/4-apimones-card-js/json/data.json');
  //     const data = await response.json();
  //     const { name, src } = data;
  //     const card = document.getElementById('card');
  //     renderPokemon(card, name, src);
  //   } catch (error) {
  //     console.log(errro);
  //   } finally {
  //     document.getElementById('spinner').classList.add('spinner--hidden');
  //   }
  // }
  // fetchApi();
}

export default card;