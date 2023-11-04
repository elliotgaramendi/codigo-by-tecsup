/* eslint-disable react/prop-types */

import Cart from "../cart/Cart";

const Header = ({ title }) => {
  return (
    <header className="fixed z-20 top-0 left-0 w-full py-4 bg-zinc-900/50" id="header">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <h1 className="text-sky-500 text-2xl font-black">{title}</h1>
        <a href="#cartOffCanvas" className="text-xl">🛒</a>
        <Cart />
      </div>
    </header>
  );
};

export default Header;