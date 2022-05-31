import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

const PokemonsLayout = () => {

  const applicationName = "PokémonInc";

  const credits = {
    year: new Date().getFullYear(),
    author: 'ELGS'
  };

  return (
    <>
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