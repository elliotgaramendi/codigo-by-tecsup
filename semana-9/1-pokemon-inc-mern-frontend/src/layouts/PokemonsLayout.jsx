import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Loader from "../components/sections/Loader";
import usePokemons from "../hooks/usePokemons";

const PokemonsLayout = () => {

  const { loading } = usePokemons();

  const applicationName = "PokémonInc";

  const credits = {
    year: new Date().getFullYear(),
    author: 'ELGS'
  };

  return (
    <>
      {loading && <Loader />}
      <Header
        applicationName={applicationName}
      />
      <main className="pt-16 pb-8">
        <Outlet />
      </main>
      <Footer
        credits={credits}
      />
    </>
  );
}

export default PokemonsLayout;