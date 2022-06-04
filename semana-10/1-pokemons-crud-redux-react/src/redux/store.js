import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlices from "./slices/pokemons.slices";

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlices
  }
});

export default store;