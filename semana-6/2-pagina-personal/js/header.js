const header = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  const headerNavMenuIcon = document.getElementById('headerNavMenuIcon');
  const headerNavMenuCloseIcon = document.getElementById('headerNavMenuCloseIcon');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');
  const headerNavMenuLinkItems = document.querySelectorAll('.header-nav__menu-link-item');

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

  document.addEventListener('scroll', documentScroll);
  headerNavMenuIcon.addEventListener('click', openMenu);
  headerNavMenuCloseIcon.addEventListener('click', closeMenu);
  headerNavMenuLinkItems.forEach((element) => {
    element.addEventListener('click', closeMenu);
  });
}

export default header;