'use strict';
import header from './header.js';
import weeksSlider from './weeksSlider.js';

const documentReady = () => {
  header();
  weeksSlider();
}
document.addEventListener('DOMContentLoaded', documentReady);