const Footer = ({ credits }) => {
  const { year, author } = credits;
  return (
    <footer className="mt-auto bg-zinc-800 shadow shadow-zinc-500/50">
      <nav className="py-6">
        <div className="flex flex-col gap-4 container mx-auto px-8 md:px-4">
          <ul className="flex justify-center gap-4 md:gap-6">
            <li className="flex">
              <a href="https://www.linkedin.com/in/elliotgaramendi/" className="flex w-6 transition-all hover:scale-125 hover:brightness-150 md:w-8">
                <img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" className="w-full" />
              </a>
            </li>
            <li className="flex">
              <a href="https://www.instagram.com/elliotgaramendi/" className="flex w-6 transition-all hover:scale-125 hover:brightness-150 md:w-8">
                <img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" className="w-full" />
              </a>
            </li>
            <li className="flex">
              <a href="https://www.facebook.com/elliotgaramendi" className="flex w-6 transition-all hover:scale-125 hover:brightness-150 md:w-8">
                <img src="https://i.postimg.cc/7YHyZXZX/facebook.png" alt="Facebook" className="w-full" />
              </a>
            </li>
            <li className="flex">
              <a href="https://github.com/ElliotXLeo" className="flex w-6 transition-all hover:scale-125 hover:brightness-150 md:w-8">
                <img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" className="w-full" />
              </a>
            </li>
            <li className="flex">
              <a href="https://www.youtube.com/channel/UCE9whBrtYnLWrpzwk6z_JUA" className="flex w-6 transition-all hover:scale-125 hover:brightness-150 md:w-8">
                <img src="https://i.postimg.cc/dtPYcvbM/youtube.png" alt="YouTube" className="w-full" />
              </a>
            </li>
            <li className="flex">
              <a href="https://elliotxleo.github.io/portafolio-web-elgs/" className="flex w-6 transition-all hover:scale-125 hover:brightness-150 md:w-8">
                <img src="https://i.postimg.cc/65TVxg9t/world-globe.png" alt="Página Personal"
                  className="w-full" />
              </a>
            </li>
          </ul>
          <h2 className="relative text-center text-sm before:absolute before:-top-2 before:left-0 before:w-full before:h-0.5 before:bg-zinc-500/50">
            🦄Copyright &copy; {year} <a href="https://www.linkedin.com/in/elliotgaramendi/" className="text-cyan-300" target="_blank" rel="noopener noreferrer">{author}.</a> Todos los derechos reservados.🦄
          </h2>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;