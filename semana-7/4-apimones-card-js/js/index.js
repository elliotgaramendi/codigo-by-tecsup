'use strict';
import header from './header.js';
import loader from './loader.js';

const documentReady = () => {
  loader();
  header();
};

document.addEventListener('DOMContentLoaded', documentReady);