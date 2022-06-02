import {
  FETCH_CREATE_POKEMON_REQUEST,
  FETCH_CREATE_POKEMON_SUCCESS
} from "../types/pokemonsTypes";

export const fetchCreatePokemonRequest = () => ({
  type: FETCH_CREATE_POKEMON_REQUEST,
  payload: true
});

export const fetchCreatePokemonSuccess = (pokemon) => ({
  type: FETCH_CREATE_POKEMON_SUCCESS,
  payload: pokemon
});