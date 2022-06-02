import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import pokemonsReducers from "./reducers/pokemonsReducers";

const store = createStore(pokemonsReducers, composeWithDevTools());
export default store;