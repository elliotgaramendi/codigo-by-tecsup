const header = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');
  const headerNavThemeIconContainer = document.getElementById('headerNavThemeIconContainer');

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', scrollY > 0);
  });

  headerNavThemeIconContainer.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    headerNavThemeIconContainer.classList.toggle('header-nav__theme-icon-container--active');
    localStorage.setItem('darkMode', (document.documentElement.classList.contains('light') ? 'false' : 'true'));
  });

  if (['true', null].includes(localStorage.getItem('darkMode'))) {
    document.documentElement.classList.remove('light');
    headerNavThemeIconContainer.classList.remove('header-nav__theme-icon-container--active');
  } else {
    document.documentElement.classList.add('light');
    headerNavThemeIconContainer.classList.add('header-nav__theme-icon-container--active');
  }
};

export default header;