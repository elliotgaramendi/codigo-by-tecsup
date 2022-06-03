import axiosInstance from "../../configs/axiosInstance";
import { showToast } from "../../utils/sweetalert";
import {
  FETCH_CREATE_POKEMON_ERROR,
  FETCH_CREATE_POKEMON_REQUEST,
  FETCH_CREATE_POKEMON_SUCCESS,
  FETCH_READ_POKEMONS_ERROR,
  FETCH_READ_POKEMONS_REQUEST,
  FETCH_READ_POKEMONS_SUCCESS
} from "../types/pokemonsTypes";

const fetchCreatePokemonRequest = (loading) => ({
  type: FETCH_CREATE_POKEMON_REQUEST,
  payload: loading
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
    dispatch(fetchCreatePokemonRequest(true));
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
      showToast('success', 'Pokémon Creado');
    } catch (error) {
      dispatch(fetchCreatePokemonError(error));
      setTimeout(() => {
        dispatch(fetchCreatePokemonError({}));
      }, 5000);
    }
  });
};

const fetchReadPokemonsRequest = (loading) => ({
  type: FETCH_READ_POKEMONS_REQUEST,
  payload: loading
});

const fetchReadPokemonsSuccess = (pokemons) => ({
  type: FETCH_READ_POKEMONS_SUCCESS,
  payload: pokemons
});

const fetchReadPokemonsError = (error) => ({
  type: FETCH_READ_POKEMONS_ERROR,
  payload: error
});

export const fetchReadPokemons = () => {
  return (async (dispatch) => {
    dispatch(fetchReadPokemonsRequest(true));
    try {
      const options = {
        method: 'GET',
        url: `/pokemons`
      };
      const { data } = await axiosInstance(options);
      dispatch(fetchReadPokemonsSuccess(data));
    } catch (error) {
      dispatch(fetchReadPokemonsError(error));
      setTimeout(() => {
        dispatch(fetchReadPokemonsError({}));
      }, 5000);
    }
  });
};