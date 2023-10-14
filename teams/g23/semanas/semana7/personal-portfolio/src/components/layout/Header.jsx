const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="#">
            <img
              src="https://i.postimg.cc/Y9zngjZV/elliot-garamendi-sonrisa.png"
              alt="Elliot Garamendi"
              width={48}
              height={48}
            />
          </a>
          <div id="off-canvas">
            <div>
              <a href="#off-canvas">✖</a>
              <ul>
                <li>
                  <a href="#">Experiencia</a>
                </li>
                <li>
                  <a href="#">Proyectos</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">YouTube</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
            <a href="#off-canvas--close">
              🍔
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;