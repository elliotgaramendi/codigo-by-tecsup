const header = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');
  const headerNavThemeIconContainer = document.getElementById('headerNavThemeIconContainer');
  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  const headerNavMenuCloseIconContainer = document.getElementById('headerNavMenuCloseIconContainer');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');

  const openMenu = () => headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');

  const closeMenu = () => headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', scrollY > 0);
  });

  headerNavThemeIconContainer.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    headerNavThemeIconContainer.classList.toggle('header-nav__theme-icon-container--active');
    localStorage.setItem('darkMode', (document.documentElement.classList.contains('light') ? 'false' : 'true'));
  });
  headerNavMenuIconContainer.addEventListener('click', openMenu);
  headerNavMenuCloseIconContainer.addEventListener('click', closeMenu);
  headerNavMenuLinkList.addEventListener('click', e => e.target.tagName === 'A' && closeMenu())

  if (['true', null].includes(localStorage.getItem('darkMode'))) {
    document.documentElement.classList.remove('light');
    headerNavThemeIconContainer.classList.remove('header-nav__theme-icon-container--active');
  } else {
    document.documentElement.classList.add('light');
    headerNavThemeIconContainer.classList.add('header-nav__theme-icon-container--active');
  }

};

export default header;