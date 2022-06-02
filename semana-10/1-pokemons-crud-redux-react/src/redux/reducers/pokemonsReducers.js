import {
  FETCH_CREATE_POKEMON_REQUEST,
  FETCH_CREATE_POKEMON_SUCCESS
} from "../types/pokemonsTypes";

const initialState = {
  loading: false,
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
        pokemons: [...state.pokemons, action.payload]
      };
    default:
      return state;
  }
};

export default pokemonsReducers;