'use strict';
import header from './header.js';
import weekSlider from './weekSlider.js';

const documentReady = () => {
  header();
  weekSlider();
}
document.addEventListener('DOMContentLoaded', documentReady);