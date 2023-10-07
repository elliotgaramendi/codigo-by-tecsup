const header = () => {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.header-nav');
  const menuButton = document.getElementById('headerNavMenuIconContainer');
  const menuCloseButton = document.getElementById('headerNavMenuCloseIconContainer');
  const linksMenu = document.querySelector('.header-nav__menu-link-list');

  const openMenu = () => linksMenu.classList.add('header-nav__menu-link-list--open');
  const closeMenu = () => linksMenu.classList.remove('header-nav__menu-link-list--open');

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', scrollY > 0);
    nav.classList.toggle('header-nav--scroll', scrollY > 0);
  });

  menuButton.addEventListener('click', openMenu);
  menuCloseButton.addEventListener('click', closeMenu);

  linksMenu.addEventListener('click', e => e.target.tagName === 'A' && closeMenu());
};

export default header;