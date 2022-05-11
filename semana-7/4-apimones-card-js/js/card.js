import { renderPokemon } from "../utils/util.js";

const card = () => {
  const fetchApi = async () => {
    document.getElementById('spinner').classList.remove('spinner--hidden');
    try {
      const response = await fetch('http://127.0.0.1:5500/semana-7/4-apimones-card-js/json/data.json');
      const data = await response.json();
      const { name, src } = data;
      const card = document.getElementById('card');
      renderPokemon(card, name, src);
    } catch (error) {
      console.log(errro);
    } finally {
      document.getElementById('spinner').classList.add('spinner--hidden');
    }
  }
  fetchApi();
};

export default card;