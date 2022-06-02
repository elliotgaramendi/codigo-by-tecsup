import { FETCH_CREATE_POKEMON_REQUEST } from "../types/pokemonsTypes";

const initialState = {
  loading: false
};

const pokemonsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREATE_POKEMON_REQUEST:
      console.log(action.payload);
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default pokemonsReducers;