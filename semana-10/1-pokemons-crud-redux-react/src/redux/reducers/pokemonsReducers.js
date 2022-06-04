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

const initialState = {
  loading: false,
  error: {},
  pokemon: {},
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
    case FETCH_READ_POKEMONS_REQUEST:
      return {
        ...state,
        loading: action.payload
      };
    case FETCH_READ_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        pokemons: action.payload
      };
    case FETCH_READ_POKEMONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_READ_POKEMON_REQUEST:
      return {
        ...state,
        loading: action.payload
      };
    case FETCH_READ_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        pokemon: action.payload
      };
    case FETCH_READ_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_UPDATE_POKEMON_REQUEST:
      return {
        ...state,
        loading: action.payload
      };
    case FETCH_UPDATE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        pokemon: {},
        pokemons: state.pokemons.map(pokemon => pokemon._id === action.payload._id ? action.payload : pokemon)
      };
    case FETCH_UPDATE_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_DELETE_POKEMON_REQUEST:
      return {
        ...state,
        loading: action.payload
      };
    case FETCH_DELETE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        pokemon: {},
        pokemons: state.pokemons.filter(pokemon => pokemon._id !== action.payload)
      };
    case FETCH_DELETE_POKEMON_ERROR:
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