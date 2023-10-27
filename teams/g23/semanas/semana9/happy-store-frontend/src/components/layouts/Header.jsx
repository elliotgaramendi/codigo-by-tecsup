/* eslint-disable react/prop-types */

const Header = ({ title }) => {
  return (
    <header className="fixed top-0 left-0 w-full py-4 bg-zinc-900/50">
      <div className="container px-4 mx-auto flex flex-col gap-4">
        <h1 className="text-sky-500 text-2xl font-black">{title}</h1>
      </div>
    </header>
  );
};

export default Header;