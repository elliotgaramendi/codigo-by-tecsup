import { fetchApi, renderPokemon } from "../utils/util.js";

const card = async () => {
  const pokemonLocal = document.getElementById('pokemonLocal');
  const pokemonRemote = document.getElementById('pokemonRemote');

  // fetchApi();

  // const data = await fetchApi('https://pokeapi.co/api/v2/pokemon/151');
  // console.log(data);

  // const data = await fetchApi('https://pokeapi.co/api/v2/pokemon/151');
  // console.log(data);

  // const inicio = performance.now();
  // const data1 = await fetchApi('https://pokeapi.co/api/v2/pokemon/151', 'GET');
  // const data2 = await fetchApi('https://raw.githubusercontent.com/ElliotXLeo/bootcamp-frontend-t-g-15/develop/semana-7/4-apimones-card-js/json/pokeapi-api-v2-pokemon-151.json', 'GET');
  // console.log(data1);
  // console.log(data2);
  // const final = performance.now();
  // console.log(`Tiempo de ejecución: ${final - inicio}ms`);

  // const inicio = performance.now();
  // const [localData, remotedata] = await fetchApi('https://raw.githubusercontent.com/ElliotXLeo/bootcamp-frontend-t-g-15/develop/semana-7/4-apimones-card-js/json/pokeapi-api-v2-pokemon-151.json', 'https://pokeapi.co/api/v2/pokemon/151');
  // console.log(localData);
  // console.log(remotedata);
  // const final = performance.now();
  // console.log(`Tiempo de ejecución: ${final - inicio}ms`);

  const [localData, remotedata] = await fetchApi('https://raw.githubusercontent.com/ElliotXLeo/bootcamp-frontend-t-g-15/develop/semana-7/4-apimones-card-js/json/pokeapi-api-v2-pokemon-151.json', 'https://pokeapi.co/api/v2/pokemon/151');
  renderPokemon(pokemonLocal, localData);
  renderPokemon(pokemonRemote, remotedata);


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