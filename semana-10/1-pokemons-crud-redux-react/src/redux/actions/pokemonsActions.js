import axiosInstance from "../../configs/axiosInstance";
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
  return (async (dispatch) => {
    dispatch(fetchCreatePokemonRequest());
    try {
      const form = new FormData();
      for (const key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `/pokemons`
      };
      const { data } = await axiosInstance(options);
      dispatch(fetchCreatePokemonSuccess(data));
    } catch (error) {
      dispatch(fetchCreatePokemonError(error));
      setTimeout(() => {
        dispatch(fetchCreatePokemonError({}));
      }, 5000);
    }
  });
};