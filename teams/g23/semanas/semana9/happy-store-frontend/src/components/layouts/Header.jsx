/* eslint-disable react/prop-types */

import ShoppingCart from "./ShoppingCart";

const Header = ({ title }) => {
  return (
    <header className="fixed z-20 top-0 left-0 w-full py-4 bg-zinc-900/50" id="header">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <h1 className="text-sky-500 text-2xl font-black">{title}</h1>
        <a href="#shoppingCartOffCanvas" className="text-xl">🛒</a>
        <div className="fixed z-50 top-0 right-0 bottom-0 left-0 bg-zinc-900/50 flex justify-end opacity-0 pointer-events-none transition-opacity target:opacity-100 target:pointer-events-auto" id="shoppingCartOffCanvas">
          <div className="relative w-3/4 max-w-lg h-full p-4 bg-zinc-900/50 flex flex-col gap-4 ">
            <header className="flex items-center justify-between border-b-2">
              <h2 className="text-sky-500 text-xl font-extrabold">Carrito</h2>
              <a href="#header" className="text-xl">✖</a>
            </header>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;