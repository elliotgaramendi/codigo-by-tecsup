'use strict';
const documentReady = () => {
  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  const headerNavCloseIconContainer = document.getElementById('headerNavCloseIconContainer');
  const headerNavLinkList = document.querySelector('.header-nav__link-list');
  const headerNavLinks = [...document.querySelectorAll('.header-nav__link')];

  const openMenu = () => {
    headerNavLinkList.classList.add('header-nav__link-list--open');
  };

  const closeMenu = () => {
    headerNavLinkList.classList.remove('header-nav__link-list--open');
  };

  headerNavMenuIconContainer.addEventListener('click', openMenu);
  headerNavCloseIconContainer.addEventListener('click', closeMenu);
  headerNavLinks.forEach((element) => {
    element.addEventListener('click', closeMenu);
  });
}
document.addEventListener('DOMContentLoaded', documentReady);