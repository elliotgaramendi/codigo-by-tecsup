const hero = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroLearnButton = document.querySelector('.hero__learn-button');
  const heroStars = document.querySelector('.hero__stars-image');
  const heroMoon = document.querySelector('.hero__moon-image');
  const heroMountainsBehind = document.querySelector('.hero__mountains-behind-image');
  const heroMountainsFront = document.querySelector('.hero__mountains-front-image');

  window.addEventListener('scroll', () => {
    heroTitle.style.transform = `translate(-${scrollY * 1.25}px, ${scrollY * 0.25}px)`;
    heroLearnButton.style.transform = `translate(-50%, ${scrollY * 0.25}px)`;
    heroStars.style.transform = `translate(0, ${scrollY * 0.75}px)`;
    heroMoon.style.transform = `translateY(${scrollY}px)`;
    heroMountainsBehind.style.transform = `translate(0, ${scrollY * 0.25}px)`;
    heroMountainsFront.style.transform = `translate(0, ${scrollY * 0.375}px)`;
  });
};

export default hero;