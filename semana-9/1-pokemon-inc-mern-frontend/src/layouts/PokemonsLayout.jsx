import { Outlet } from "react-router-dom";

const PokemonsLayout = () => {
  return (
    <>
      <header className="text-center">
        PokémonInc
      </header>
      <main className="text-center">
        <Outlet />
      </main>
      <footer className="mt-auto text-center">
        ELGS
      </footer>
    </>
  );
}

export default PokemonsLayout;