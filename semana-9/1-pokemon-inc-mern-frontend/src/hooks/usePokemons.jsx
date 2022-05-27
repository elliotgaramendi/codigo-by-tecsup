import { useContext } from "react";
import { PokemonsContext } from "../context/PokemonsContext";

const usePokemons = () => {
  const context = useContext(PokemonsContext);
  return (context);
}

export default usePokemons;