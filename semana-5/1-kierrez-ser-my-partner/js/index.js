'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const nowZomosNobios = () => {
    alert('💞 Now zomos ParTnEr 💞');
    alert('😱Nuestra VoDa Is MañaNa😱');
    location.href = 'https://www.youtube.com/watch?v=lOD4tHz4A_8';
  };

  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('🥰 Dyme 2 naMe 🥰');
  heroTitle.innerHTML += partner + ' ❤';

  heroButtonSi.addEventListener('click', nowZomosNobios);
  heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);