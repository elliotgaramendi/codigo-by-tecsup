import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";
import { showError } from "../../utils/myAlert";
import { showToast } from "../../utils/sweetalert";
import { showAlert } from "./alerts.slices";

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
    },
    fetchReadPokemonRequest(state, action) {
      return {
        ...state,
        loading: action.payload
      };
    },
    fetchReadPokemonSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: {},
        pokemon: action.payload
      };
    },
    fetchReadPokemonError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    },
    fetchUpdatePokemonRequest(state, action) {
      return {
        ...state,
        loading: action.payload
      };
    },
    fetchUpdatePokemonSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: {},
        pokemon: {},
        pokemons: state.pokemons.map(pokemon => pokemon._id === action.payload._id ? action.payload : pokemon)
      };
    },
    fetchUpdatePokemonError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    },
    fetchDeletePokemonRequest(state, action) {
      return {
        ...state,
        loading: action.payload
      };
    },
    fetchDeletePokemonSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: {},
        pokemon: {},
        pokemons: state.pokemons.filter(pokemon => pokemon._id !== action.payload)
      };
    },
    fetchDeletePokemonError(state, action) {
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
  fetchReadPokemonsSuccess,
  fetchReadPokemonError,
  fetchReadPokemonRequest,
  fetchReadPokemonSuccess,
  fetchUpdatePokemonError,
  fetchUpdatePokemonRequest,
  fetchUpdatePokemonSuccess,
  fetchDeletePokemonError,
  fetchDeletePokemonRequest,
  fetchDeletePokemonSuccess
} = pokemonsSlices.actions;

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
      dispatch(showAlert({
        name: "Pokémons",
        message: "Pokémons leídos"
      }));
    } catch (error) {
      dispatch(showError(error, fetchReadPokemonsError));
    }
  });
};

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
      showToast('info', 'Leído');
    } catch (error) {
      dispatch(showError(error, fetchReadPokemonError));
    }
  });
};

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

export default pokemonsSlices.reducer;