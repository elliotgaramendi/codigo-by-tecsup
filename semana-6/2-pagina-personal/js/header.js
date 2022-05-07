const header = () => {
  const headerNavMenuIcon = document.getElementById('headerNavMenuIcon');
  const headerNavMenuCloseIcon = document.getElementById('headerNavMenuCloseIcon');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');

  const openMenu = () => {
    headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');
  };

  const closeMenu = () => {
    headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');
  };

  headerNavMenuIcon.addEventListener('click', openMenu);
  headerNavMenuCloseIcon.addEventListener('click', closeMenu);
}

export default header;