import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";
import { showError } from "../../utils/myAlert";

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
        pokemons: [...state.pokemons, action.payload]
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

export const {
  fetchReadPokemonsError,
  fetchReadPokemonsRequest,
  fetchReadPokemonsSuccess
} = pokemonsSlices.actions;

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
      //   name: 'Pokémons',
      //   message: 'Pokémons leídos'
      // }));
    } catch (error) {
      dispatch(showError(error, fetchReadPokemonsError));
    }
  });
};

export default pokemonsSlices.reducer;