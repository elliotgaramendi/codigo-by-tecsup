import {
  FETCH_CREATE_POKEMON_ERROR,
  FETCH_CREATE_POKEMON_REQUEST,
  FETCH_CREATE_POKEMON_SUCCESS
} from "../types/pokemonsTypes";

const fetchCreatePokemonRequest = () => ({
  type: FETCH_CREATE_POKEMON_REQUEST,
  payload: true
});

const fetchCreatePokemonSuccess = (pokemon) => ({
  type: FETCH_CREATE_POKEMON_SUCCESS,
  payload: pokemon
});

const fetchCreatePokemonError = (error) => ({
  type: FETCH_CREATE_POKEMON_ERROR,
  payload: error
});

export const fetchCreatePokemon = (pokemon) => {
  return ((dispatch) => {
    dispatch(fetchCreatePokemonRequest());
    try {
      dispatch(fetchCreatePokemonSuccess(pokemon));
    } catch (error) {
      dispatch(fetchCreatePokemonError(error));
    }
  });
};