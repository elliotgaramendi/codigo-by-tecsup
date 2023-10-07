'use strict';

import header from './modules/haeder.js';
import loader from './modules/loader.js';

document.addEventListener('DOMContentLoaded', () => {
  loader();
  header();
});