'use strict';
import header from './header.js';
import spinner from './spinner.js';
import weeksSlider from './weeksSlider.js';

const documentReady = () => {
  spinner();
  header();
  weeksSlider();
}
document.addEventListener('DOMContentLoaded', documentReady);