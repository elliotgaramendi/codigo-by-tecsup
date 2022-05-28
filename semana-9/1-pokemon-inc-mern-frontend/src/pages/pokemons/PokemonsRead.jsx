import PokemonsCard from "../../components/pokemons/PokemonsCard";
import usePokemons from "../../hooks/usePokemons";

const PokemonsRead = () => {

  const { pokemons } = usePokemons();

  return (
    <section className="py-8">
      <div className="flex flex-col gap-8 container mx-auto px-8 md:px-4">
        <h2 className="text-yellow-400 text-3xl text-center font-bold">Pokémons {pokemons.length}</h2>
        <div className="grid justify-items-center gap-8 md:grid-cols-3">
          {
            pokemons.map((pokemon) => {
              return (
                <PokemonsCard
                  key={pokemon._id}
                  pokemon={pokemon}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default PokemonsRead;