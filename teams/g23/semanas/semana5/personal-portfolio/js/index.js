'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');

  document.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    nav.classList.toggle('nav--scroll', window.scrollY > 0);
  });
});