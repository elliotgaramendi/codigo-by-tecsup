import { useEffect, useRef } from "react";

const Header = () => {
  const header = useRef();
  const nav = useRef();

  const handleScroll = () => {
    header.current.classList.toggle('header--scroll', window.scrollY > 0);
    nav.current.classList.toggle('nav--scroll', window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="header"
      ref={header}
      id={header}
    >
      <nav
        className="nav"
        ref={nav}
      >
        <div className="container flexbox flexbox--centered-sides">
          <a href="#">
            <img
              src="https://i.postimg.cc/Y9zngjZV/elliot-garamendi-sonrisa.png"
              alt="Elliot Garamendi"
              className="img img--logo"
              width={48}
              height={48}
            />
          </a>
          <div className="off-canvas off-canvas--right" id="off-canvas">
            <div className="off-canvas__child">
              <a href="#header" className="off-canvas__close">
                ✖
              </a>
              <ul className="list d-flex f-direction-column g-4xs">
                <li>
                  <a href="#" className="link">Experiencia</a>
                </li>
                <li>
                  <a href="#" className="link">Proyectos</a>
                </li>
                <li>
                  <a href="#" className="link">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex a-items-center g-5xs">
            <ul className="list d-flex g-5xs">
              <li>
                <a href="#" className="link">YouTube</a>
              </li>
              <li>
                <a href="#" className="link">GitHub</a>
              </li>
              <li>
                <a href="#" className="link">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="link">Instagram</a>
              </li>
            </ul>
            <a href="#off-canvas">
              🍔
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;