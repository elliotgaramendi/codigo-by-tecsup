'use strict';

const header = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  const headerNavMenuCloseIconContainer = document.getElementById('headerNavMenuCloseIconContainer');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');
  const headerNavMenuLinks = [...document.querySelectorAll('.header-nav__menu-link')];

  const headerNavThemeIconContainer = document.getElementById('headerNavThemeIconContainer');

  const documentScroll = () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);
  };

  const openMenu = () => {
    headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');
  };

  const closeMenu = () => {
    headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');
  };

  const toggleTheme = () => {
    const body = document.querySelector('.body');
    body.classList.toggle('body--light');
    headerNavThemeIconContainer.classList.toggle('header-nav__theme-icon-container--active');

    if (body.classList.contains('body--light')) {
      localStorage.setItem('darkMode', 'false');
    } else {
      localStorage.setItem('darkMode', 'true');
    }
  };

  if (localStorage.getItem('darkMode') === 'true' || localStorage.getItem('darkMode') === null) {
    document.querySelector('.body').classList.remove('body--light');
    headerNavThemeIconContainer.classList.remove('header-nav__theme-icon-container--active');
  } else {
    document.querySelector('.body').classList.add('body--light');
    headerNavThemeIconContainer.classList.add('header-nav__theme-icon-container--active');
  }

  document.addEventListener('scroll', documentScroll);
  headerNavThemeIconContainer.addEventListener('click', toggleTheme);
  headerNavMenuIconContainer.addEventListener('click', openMenu);
  headerNavMenuCloseIconContainer.addEventListener('click', closeMenu);
  headerNavMenuLinks.forEach((element) => {
    element.addEventListener('click', closeMenu);
  });
};

export default header;