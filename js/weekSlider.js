'use strict';

const weekSlider = () => {
  const learningWeekSliderList = document.querySelector('.learning-week__slider-list');
  const learningWeekSliderItem = document.querySelectorAll('.learning-week__slider-item');
  const learningWeekSliderItemLast = learningWeekSliderItem[learningWeekSliderItem.length - 1];
  const sliderSliderButtonLeft = document.getElementById('sliderSliderButtonLeft');
  const sliderSliderButtonRight = document.getElementById('sliderSliderButtonRight');

  const previousSliderItem = () => {
    const learningWeekSliderItem = document.querySelectorAll('.learning-week__slider-item');
    const learningWeekSliderItemLast = learningWeekSliderItem[learningWeekSliderItem.length - 1];
    learningWeekSliderList.style.marginLeft = '0';
    learningWeekSliderList.style.transition = 'all 0.5s';
    sliderSliderButtonLeft.disabled = true;
    sliderSliderButtonRight.disabled = true;
    setTimeout(() => {
      learningWeekSliderList.style.transition = 'none';
      learningWeekSliderList.insertAdjacentElement('afterbegin', learningWeekSliderItemLast);
      learningWeekSliderList.style.marginLeft = '-100%';
      sliderSliderButtonLeft.disabled = false;
      sliderSliderButtonRight.disabled = false;
    }, 500);
  };

  const nextSliderItem = () => {
    const learningWeekSliderItemFirst = document.querySelectorAll('.learning-week__slider-item')[0];
    learningWeekSliderList.style.marginLeft = '-200%';
    learningWeekSliderList.style.transition = 'all 0.5s';
    sliderSliderButtonLeft.disabled = true;
    sliderSliderButtonRight.disabled = true;
    setTimeout(() => {
      learningWeekSliderList.style.transition = 'none';
      learningWeekSliderList.insertAdjacentElement('beforeend', learningWeekSliderItemFirst);
      learningWeekSliderList.style.marginLeft = '-100%';
      sliderSliderButtonLeft.disabled = false;
      sliderSliderButtonRight.disabled = false;
    }, 500);

  };

  learningWeekSliderList.style.width = `${learningWeekSliderItem.length * 100}%`;
  learningWeekSliderList.insertAdjacentElement('afterbegin', learningWeekSliderItemLast);
  learningWeekSliderList.style.marginLeft = '-100%';
  sliderSliderButtonLeft.addEventListener('click', previousSliderItem);
  sliderSliderButtonRight.addEventListener('click', nextSliderItem);
};

export default weekSlider;