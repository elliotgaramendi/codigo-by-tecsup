import { fetchApi, getRandomInteger, renderCard } from "../utils/utils.js";

const card = async () => {
  const domElement = document.getElementById('card');
  const id = getRandomInteger(1, 151);
  const pokemon = await fetchApi(id);
  renderCard(domElement, pokemon);
}

export default card;