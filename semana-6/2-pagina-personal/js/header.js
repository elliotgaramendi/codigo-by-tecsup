const header = () => {
  const headerNavMenuIcon = document.getElementById('headerNavMenuIcon');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');
  
  const toggleMenu = () => {
    headerNavMenuLinkList.classList.toggle('header-nav__menu-link-list--open');
  };

  headerNavMenuIcon.addEventListener('click', toggleMenu);
}

export default header;