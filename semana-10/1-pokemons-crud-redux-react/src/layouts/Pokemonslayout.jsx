import { Outlet } from "react-router-dom";

const PokemonsLayout = () => {
  return (
    <>
      <header className="text-center">
        PokémonsCRUD
      </header>
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