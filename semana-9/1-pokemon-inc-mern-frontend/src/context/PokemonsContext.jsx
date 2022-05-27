import { createContext, useState } from "react";

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {

  const [pokemons, setPokemons] = useState([]);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        setPokemons
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
