import { renderPokemon } from "../utils/util.js";

const card = () => {
  const card = document.getElementById('card');
  renderPokemon(card, 'pikachu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');
};

export default card;