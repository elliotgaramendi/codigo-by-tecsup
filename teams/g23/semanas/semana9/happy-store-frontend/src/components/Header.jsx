/* eslint-disable react/prop-types */

import Filters from "./Filters";

const Header = ({ title, setFilters }) => {
  return (
    <header className="py-4">
      <div className="container px-4 mx-auto flex flex-col gap-4">
        <h1 className="text-sky-500 text-3xl font-black text-center">{title}</h1>
        <Filters setFilters={setFilters} />
      </div>
    </header>
  );
};

export default Header;