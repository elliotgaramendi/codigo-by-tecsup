import {
  FETCH_CREATE_POKEMON_ERROR,
  FETCH_CREATE_POKEMON_REQUEST,
  FETCH_CREATE_POKEMON_SUCCESS
} from "../types/pokemonsTypes";

const initialState = {
  loading: false,
  error: {},
  pokemons: []
};

const pokemonsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREATE_POKEMON_REQUEST:
      return {
        ...state,
        loading: action.payload
      };
    case FETCH_CREATE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        pokemons: [...state.pokemons, action.payload]
      };
    case FETCH_CREATE_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default pokemonsReducers;