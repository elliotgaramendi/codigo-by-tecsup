'use strict';

const weeksSlider = () => {
  const learningWeeksSliderList = document.querySelector('.learning-weeks__slider-list');
  const learningWeeksSliderItem = document.querySelectorAll('.learning-weeks__slider-item');
  const learningWeeksSliderItemLast = learningWeeksSliderItem[learningWeeksSliderItem.length - 1];
  const sliderSliderButtonLeft = document.getElementById('sliderSliderButtonLeft');
  const sliderSliderButtonRight = document.getElementById('sliderSliderButtonRight');

  const previousSliderItem = () => {
    clearInterval(timeoutId);
    const learningWeeksSliderItem = document.querySelectorAll('.learning-weeks__slider-item');
    const learningWeeksSliderItemLast = learningWeeksSliderItem[learningWeeksSliderItem.length - 1];
    learningWeeksSliderList.style.marginLeft = '0';
    learningWeeksSliderList.style.transition = 'all 0.5s';
    sliderSliderButtonLeft.disabled = true;
    sliderSliderButtonRight.disabled = true;
    setTimeout(() => {
      learningWeeksSliderList.style.transition = 'none';
      learningWeeksSliderList.insertAdjacentElement('afterbegin', learningWeeksSliderItemLast);
      learningWeeksSliderList.style.marginLeft = '-100%';
      sliderSliderButtonLeft.disabled = false;
      sliderSliderButtonRight.disabled = false;
      timeoutId = setInterval(nextSliderItem, 5000)
    }, 500);
  };

  const nextSliderItem = () => {
    clearInterval(timeoutId);
    const learningWeeksSliderItemFirst = document.querySelectorAll('.learning-weeks__slider-item')[0];
    learningWeeksSliderList.style.marginLeft = '-200%';
    learningWeeksSliderList.style.transition = 'all 0.5s';
    sliderSliderButtonLeft.disabled = true;
    sliderSliderButtonRight.disabled = true;
    setTimeout(() => {
      learningWeeksSliderList.style.transition = 'none';
      learningWeeksSliderList.insertAdjacentElement('beforeend', learningWeeksSliderItemFirst);
      learningWeeksSliderList.style.marginLeft = '-100%';
      sliderSliderButtonLeft.disabled = false;
      sliderSliderButtonRight.disabled = false;
      timeoutId = setInterval(nextSliderItem, 5000)
    }, 500);

  };

  learningWeeksSliderList.style.width = `${learningWeeksSliderItem.length * 100}%`;
  learningWeeksSliderList.insertAdjacentElement('afterbegin', learningWeeksSliderItemLast);
  learningWeeksSliderList.style.marginLeft = '-100%';
  sliderSliderButtonLeft.addEventListener('click', previousSliderItem);
  sliderSliderButtonRight.addEventListener('click', nextSliderItem);
  let timeoutId = setInterval(nextSliderItem, 5000);
};

export default weeksSlider;