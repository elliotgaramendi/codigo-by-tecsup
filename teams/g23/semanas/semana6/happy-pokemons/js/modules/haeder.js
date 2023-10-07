const header = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', scrollY > 0);
  });
};

export default header;