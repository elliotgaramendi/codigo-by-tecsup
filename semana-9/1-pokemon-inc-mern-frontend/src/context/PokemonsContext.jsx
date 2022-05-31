import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/reactHotToast";

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {

  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);

  const createPokemon = async (pokemon) => {
    try {
      const form = new FormData();
      for (const key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API_URL}/pokemons`
      };
      const { data } = await axios(options);
      setPokemons([...pokemons, data]);
      showToast('😎', 'Creado');
      navigate('/pokemons');
    } catch (error) {
      showToast('❌', error.response.data.message);
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
      showToast('❌', error.response.data.message);
    }
  };

  const readPokemon = async (_id) => {
    try {
      const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API_URL}/pokemons/${_id}`
      };
      const { data } = await axios(options);
      setPokemon(data);
      showToast('📚', 'Leído');
    } catch (error) {
      showToast('❌', error.response.data.message);
    }
  };

  const updatePokemon = async (pokemon) => {
    try {
      const form = new FormData();
      for (const key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API_URL}/pokemons/${pokemon._id}`
      };
      const { data } = await axios(options);
      setPokemons(pokemons.map((pokemon) => {
        return pokemon._id === data._id ? data : pokemon;
      }));
      showToast('📝', 'Actualizado');
      navigate('/pokemons');
    } catch (error) {
      showToast('❌', error.response.data.message);
    }
  };

  const deletePokemon = async (_id) => {
    try {
      const options = {
        method: 'DELETE',
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API_URL}/pokemons/${_id}`
      };
      const { data } = await axios(options);
      setPokemons(pokemons.filter(pokemon => pokemon._id !== _id));
      showToast('🗑', data.message);
    } catch (error) {
      showToast('❌', error.response.data.message);
    }
  };

  const submitPokemonsForm = async (pokemon) => {
    if (pokemon._id === undefined) {
      await createPokemon(pokemon);
    } else {
      await updatePokemon(pokemon);
    }
  };

  useEffect(() => {
    readPokemons();
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        pokemon,
        pokemons,
        submitPokemonsForm,
        readPokemon,
        deletePokemon
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
