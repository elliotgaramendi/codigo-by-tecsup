import axiosInstance from "../../configs/axiosInstance";
import { showToast } from "../../utils/sweetalert";
import {
  FETCH_CREATE_POKEMON_ERROR,
  FETCH_CREATE_POKEMON_REQUEST,
  FETCH_CREATE_POKEMON_SUCCESS,
  FETCH_READ_POKEMONS_ERROR,
  FETCH_READ_POKEMONS_REQUEST,
  FETCH_READ_POKEMONS_SUCCESS,
  FETCH_READ_POKEMON_ERROR,
  FETCH_READ_POKEMON_REQUEST,
  FETCH_READ_POKEMON_SUCCESS,
  FETCH_UPDATE_POKEMON_ERROR,
  FETCH_UPDATE_POKEMON_REQUEST,
  FETCH_UPDATE_POKEMON_SUCCESS
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
      showToast('success', 'Pokémon creado');
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

const fetchReadPokemonRequest = (loading) => ({
  type: FETCH_READ_POKEMON_REQUEST,
  payload: loading
});

const fetchReadPokemonSuccess = (pokemon) => ({
  type: FETCH_READ_POKEMON_SUCCESS,
  payload: pokemon
});

const fetchReadPokemonError = (error) => ({
  type: FETCH_READ_POKEMON_ERROR,
  payload: error
});

export const fetchReadPokemon = (_id) => {
  return (async (dispatch) => {
    dispatch(fetchReadPokemonRequest(true));
    try {
      const options = {
        method: 'GET',
        url: `/pokemons/${_id}`
      };
      const { data } = await axiosInstance(options);
      dispatch(fetchReadPokemonSuccess(data));
      showToast('info', 'Pokémon leído');
    } catch (error) {
      dispatch(fetchReadPokemonError(error));
      setTimeout(() => {
        dispatch(fetchReadPokemonError({}));
      }, 5000);
    }
  });
};

const fetchUpdatePokemonRequest = (loading) => ({
  type: FETCH_UPDATE_POKEMON_REQUEST,
  payload: loading
});

const fetchUpdatePokemonSuccess = (pokemon) => ({
  type: FETCH_UPDATE_POKEMON_SUCCESS,
  payload: pokemon
});

const fetchUpdatePokemonError = (error) => ({
  type: FETCH_UPDATE_POKEMON_ERROR,
  payload: error
});

export const fetchUpdatePokemon = (pokemon) => {
  return (async (dispatch) => {
    dispatch(fetchUpdatePokemonRequest(true));
    try {
      const form = new FormData();
      for (const key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `/pokemons/${pokemon._id}`
      };
      const { data } = await axiosInstance(options);
      dispatch(fetchUpdatePokemonSuccess(data));
      showToast('warnign', 'Pokémon actualizado');
    } catch (error) {
      dispatch(fetchUpdatePokemonError(error));
      setTimeout(() => {
        dispatch(fetchUpdatePokemonError({}));
      }, 5000);
    }
  });
};