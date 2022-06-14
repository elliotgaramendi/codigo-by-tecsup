import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Alert from "../components/sections/Alert";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Loader from "../components/sections/Loader";
import { fetchReadPokemons } from "../redux/slices/pokemons.slices";

const PokemonsLayout = () => {
  const { loading, error } = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  const applicationName = "PokémonsCRUD";

  const credits = {
    year: new Date().getFullYear(),
    author: 'ELGS'
  };

  useEffect(() => {
    dispatch(fetchReadPokemons());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error.message && <Alert alert={error} />}
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
};

export default PokemonsLayout;