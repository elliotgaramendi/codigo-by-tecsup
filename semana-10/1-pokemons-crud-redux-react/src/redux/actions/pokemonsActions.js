import { FETCH_CREATE_POKEMON_REQUEST } from "../types/pokemonsTypes";

export const fetchCreatePokemonRequest = (pokemon) => ({
  type: FETCH_CREATE_POKEMON_REQUEST,
  payload: pokemon
});