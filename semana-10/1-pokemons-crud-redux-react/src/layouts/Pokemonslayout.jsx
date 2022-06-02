import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";
import Loader from "../components/sections/Loader";

const PokemonsLayout = () => {
  const { loading } = useSelector(state => state);

  const applicationName = "PokémonsCRUD";

  return (
    <>
      {loading && <Loader />}
      <Header
        applicationName={applicationName}
      />
      <main className="text-center pt-16 pb-8">
        <Outlet />
      </main>
      <footer className="mt-auto text-center">
        ELGS
      </footer>
    </>
  );
}

export default PokemonsLayout;