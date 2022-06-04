import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";
import { showError } from "../../utils/myAlert";
import { showToast } from "../../utils/sweetalert";

const initialState = {
  loading: false,
  error: {},
  pokemon: {},
  pokemons: []
};

const pokemonsSlices = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    fetchCreatePokemonRequest(state, action) {
      return {
        ...state,
        loading: action.payload
      };
    },
    fetchCreatePokemonSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: {},
        pokemons: [...state.pokemons, action.payload]
      };
    },
    fetchCreatePokemonError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    },
    fetchReadPokemonsRequest(state, action) {
      return {
        ...state,
        loading: action.payload
      };
    },
    fetchReadPokemonsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: {},
        pokemons: action.payload
      };
    },
    fetchReadPokemonsError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
  }
});

const {
  fetchCreatePokemonError,
  fetchCreatePokemonRequest,
  fetchCreatePokemonSuccess,
  fetchReadPokemonsError,
  fetchReadPokemonsRequest,
  fetchReadPokemonsSuccess
} = pokemonsSlices.actions;

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
      dispatch(showError(error, fetchCreatePokemonError));
    }
  });
};

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
      // dispatch(showAlert({
      //   name: "Pokémons",
      //   message: "Pokémons leídos"
      // }));
    } catch (error) {
      dispatch(showError(error, fetchReadPokemonsError));
    }
  });
};

export default pokemonsSlices.reducer;