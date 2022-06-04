import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PokemonsForm from "../../components/pokemons/PokemonsForm";
import { useDispatch } from "react-redux";
import { fetchReadPokemon } from "../../redux/slices/pokemons.slices";

const PokemonsUpdate = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReadPokemon(id));
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