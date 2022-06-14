const header = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  const headerNavThemeIconContainer = document.getElementById('headerNavThemeIconContainer');

  const headerNavMenuIcon = document.getElementById('headerNavMenuIcon');
  const headerNavMenuCloseIcon = document.getElementById('headerNavMenuCloseIcon');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');
  const headerNavMenuLinkItems = document.querySelectorAll('.header-nav__menu-link-item');
  const headerNavMenuLinks = document.querySelectorAll('.header-nav__menu-link');

  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.header-nav__menu-link[href="#${id}"]`);
      if (entry.isIntersecting) {
        document.querySelector('.header-nav__menu-link--active')?.classList.remove('header-nav__menu-link--active');
        navLink.classList.add('header-nav__menu-link--active');
      }
    });
  }, { rootMargin: '-75% 0px -25% 0px' });

  const documentScroll = () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);
  };

  const toggleMenu = () => {
    const body = document.querySelector('.body');
    body.classList.toggle('body--light');
    headerNavThemeIconContainer.classList.toggle('header-nav__theme-icon-container--active');

    if (body.classList.contains('body--light')) {
      localStorage.setItem('darkMode', 'false');
    } else {
      localStorage.setItem('darkMode', 'true');
    }
  };

  const openMenu = () => {
    headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');
  };

  const closeMenu = () => {
    headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');
  };

  if (localStorage.getItem('darkMode') === 'true' || localStorage.getItem('darkMode') === null) {
    document.querySelector('.body').classList.remove('body--light');
    headerNavThemeIconContainer.classList.remove('header-nav__theme-icon-container--active');
  } else {
    document.querySelector('.body').classList.add('body--light');
    headerNavThemeIconContainer.classList.add('header-nav__theme-icon-container--active');
  }

  headerNavMenuLinks.forEach((element) => {
    const hash = element.getAttribute('href');
    const target = document.querySelector(hash);
    if (target) {
      intersectionObserver.observe(target);
    }
  });
  document.addEventListener('scroll', documentScroll);
  headerNavThemeIconContainer.addEventListener('click', toggleMenu);
  headerNavMenuIcon.addEventListener('click', openMenu);
  headerNavMenuCloseIcon.addEventListener('click', closeMenu);
  headerNavMenuLinkItems.forEach((element) => {
    element.addEventListener('click', closeMenu);
  });
}

export default header;