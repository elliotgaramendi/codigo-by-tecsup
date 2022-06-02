import {
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

export const fetchCreatePokemon = (pokemon) => {
  return ((dispatch) => {
    dispatch(fetchCreatePokemonRequest());
    try {
      dispatch(fetchCreatePokemonSuccess(pokemon));
    } catch (error) {
      console.log(error);
    }
  });
};