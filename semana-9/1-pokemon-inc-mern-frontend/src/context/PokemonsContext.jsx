import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {

  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([]);

  const createPokemon = async (pokemon) => {
    try {
      const form = new FormData();
      for (const key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: 'POST',
        heders: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API_URL}/pokemons`
      };
      const { data } = await axios(options);
      setPokemons([...pokemons, data]);
      navigate('/pokemons');
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const readPokemons = async () => {
    try {
      const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API_URL}/pokemons`
      };
      const { data } = await axios(options);
      setPokemons(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    readPokemons();
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        setPokemons,
        createPokemon
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
