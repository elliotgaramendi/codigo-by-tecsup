import { configureStore } from "@reduxjs/toolkit";
import alertsSlices from "./slices/alerts.slices";
import pokemonsSlices from "./slices/pokemons.slices";

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlices,
    alerts: alertsSlices
  }
});

export default store;