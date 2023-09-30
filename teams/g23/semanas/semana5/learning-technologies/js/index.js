'use strict';

import FAQ from './modules/FAQ.js';
import header from './modules/header.js';
import slider from './modules/slider.js';

document.addEventListener('DOMContentLoaded', () => {
  header();
  slider();
  FAQ();
});