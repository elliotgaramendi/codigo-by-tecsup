'use strict';
import card from './card.js';
import header from './header.js';
import loader from './loader.js';

const documentReady = () => {
  loader();
  header();
  card();
};

document.addEventListener('DOMContentLoaded', documentReady);