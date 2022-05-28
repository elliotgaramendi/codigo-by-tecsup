import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PokemonsForm from "../../components/pokemons/PokemonsForm";
import usePokemons from "../../hooks/usePokemons";

const PokemonsUpdate = () => {

  const { id } = useParams();
  const { readPokemon } = usePokemons();

  useEffect(() => {
    readPokemon(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <section className="py-8">
      <div className="flex flex-col gap-8 container mx-auto px-8 md:px-4">
        <h2 className="text-yellow-400 text-3xl text-center font-bold">Actualizar Pokémon</h2>
        <PokemonsForm />
      </div>
    </section>
  );
};

export default PokemonsUpdate;