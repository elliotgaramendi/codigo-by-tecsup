import { Link, NavLink } from "react-router-dom";

const Header = ({ applicationName }) => {
  return (
    <header className="fixed z-80 top-0 left-0 w-full bg-zinc-800 shadow shadow-zinc-500/50">
      <nav className="py-4">
        <div className="flex items-center justify-between container mx-auto px-8 md:px-4">
          <Link
            to=""
            className="text-cyan-300 text-2xl font-black transition-colors hover:text-white"
          >
            {applicationName}
          </Link>
          <ul className="flex">
            <li className="flex">
              <NavLink
                to="create"
                className={({ isActive }) => {
                  return isActive ? "bg-cyan-300 rounded-xl text-black text-xl font-bold px-2" : "rounded-xl text-white text-xl font-bold px-2 transition-colors hover:bg-cyan-300 hover:text-black";
                }}
              >
                Crear
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;