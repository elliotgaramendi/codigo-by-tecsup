import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";

const PokemonsLayout = () => {

  const applicationName = "PokémonInc";

  return (
    <>
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