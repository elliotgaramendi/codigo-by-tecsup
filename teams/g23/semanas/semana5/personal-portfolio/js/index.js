'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const buttonToTop = document.getElementById('buttonToTop');

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    nav.classList.toggle('nav--scroll', window.scrollY > 0);
    buttonToTop.classList.toggle('button--show', window.scrollY > 0);
  });

  buttonToTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });
});