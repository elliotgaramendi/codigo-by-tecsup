const header = () => {
  const header = document.querySelector('.header');
  const menuIcon = document.querySelector('.header-nav__menu-icon');
  const closeIcon = document.querySelector('.header-nav__close-icon');
  const linksMenu = document.querySelector('.header-nav__link-list');

  const openMenu = () => linksMenu.classList.add('header-nav__link-list--open');
  const closeMenu = () => linksMenu.classList.remove('header-nav__link-list--open');

  document.addEventListener('scroll', () => header.classList.toggle('header--scroll', scrollY > 0));

  menuIcon.addEventListener('click', openMenu);
  closeIcon.addEventListener('click', closeMenu);
  linksMenu.addEventListener('click', e => e.target.tagName === 'A' && closeMenu());
};

export default header;