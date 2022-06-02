import { createStore } from "redux";
import pokemonsReducers from "./reducers/pokemonsReducers";

const store = createStore(pokemonsReducers);
export default store;