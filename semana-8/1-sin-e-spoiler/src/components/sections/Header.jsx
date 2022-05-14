import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <header className="header animate__animated animate__fadeIn">
      <nav className="header-nav">
        <div className="header-nav__container">
          <div className="header-nav__link-menu-container">
            <a href="/" className="header-nav__link-logo-container">
              <img src={logo} alt="Logo Web" className="header-nav__link-logo body__img" />
            </a>
            <ul className="header-nav__menu-link-list">
              <li className="header-nav__menu-link-item">
                <a href="/" className="header-nav__menu-link">Estrenos</a>
              </li>
              <li className="header-nav__menu-link-item">
                <a href="https://www.linkedin.com/in/elliotgaramendi/"
                  className="header-nav__menu-link header-nav__menu-link--active" target="_blank"
                  rel="noopener noreferrer">Elliot</a>
              </li>
              <li className="header-nav__menu-link-item header-nav__menu-close-icon-container"
                id="headerNavMenuCloseIconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"
                  className="header-nav__menu-close-icon">
                  <path
                    d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z">
                  </path>
                  <path
                    d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z">
                  </path>
                </svg>
              </li>
            </ul>
          </div>
          <div className="header-nav__form-theme-menu-container">
            <form className="header-nav__form">
              <input type="search" placeholder="Película" />
            </form>
            <button className="header-nav__theme-icon-container" id="headerNavThemeIconContainer">
              <span className="header-nav__theme-icon">🌚</span>
              <span className="header-nav__theme-icon">🌞</span>
            </button>
            <button className="header-nav__menu-icon-container" id="headerNavMenuIconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="header-nav__menu-icon">
                <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;