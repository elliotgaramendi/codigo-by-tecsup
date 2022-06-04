import axiosInstance from "../../configs/axiosInstance";
import { showError } from "../../utils/myAlert";
import { showToast } from "../../utils/sweetalert";
import {
  FETCH_CREATE_POKEMON_ERROR,
  FETCH_CREATE_POKEMON_REQUEST,
  FETCH_CREATE_POKEMON_SUCCESS,
  FETCH_DELETE_POKEMON_ERROR,
  FETCH_DELETE_POKEMON_REQUEST,
  FETCH_DELETE_POKEMON_SUCCESS,
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
import { addAlert, resetAlert } from "./alertsActions";

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

const fetchCreatePokemon = (pokemon) => {
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
      dispatch(showError(error, fetchCreatePokemonError));
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
      dispatch(addAlert({
        name: 'Pokémons',
        message: 'Pokémons leídos'
      }));
      setTimeout(() => {
        dispatch(resetAlert({}));
      }, 5000);
    } catch (error) {
      dispatch(showError(error, fetchReadPokemonsError));
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
      dispatch(showError(error, fetchReadPokemonError));
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

const fetchUpdatePokemon = (pokemon) => {
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
      showToast('warning', 'Pokémon actualizado');
    } catch (error) {
      dispatch(showError(error, fetchUpdatePokemonError));
    }
  });
};

const fetchDeletePokemonRequest = (loading) => ({
  type: FETCH_DELETE_POKEMON_REQUEST,
  payload: loading
});

const fetchDeletePokemonSuccess = (_id) => ({
  type: FETCH_DELETE_POKEMON_SUCCESS,
  payload: _id
});

const fetchDeletePokemonError = (error) => ({
  type: FETCH_DELETE_POKEMON_ERROR,
  payload: error
});

export const fetchDeletePokemon = (_id) => {
  return (async (dispatch) => {
    dispatch(fetchDeletePokemonRequest(true));
    try {
      const options = {
        method: 'DELETE',
        url: `/pokemons/${_id}`
      };
      const { data } = await axiosInstance(options);
      dispatch(fetchDeletePokemonSuccess(_id));
      showToast('error', data.message);
    } catch (error) {
      dispatch(showError(error, fetchDeletePokemonError));
    }
  });
};

export const fetchSubmitPokemonsForm = (pokemon) => {
  return (async (dispatch) => {
    if (pokemon._id === undefined) {
      await dispatch(fetchCreatePokemon(pokemon));
    } else {
      await dispatch(fetchUpdatePokemon(pokemon));
    }
  });
};