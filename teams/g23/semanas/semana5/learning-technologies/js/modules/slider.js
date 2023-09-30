const slider = () => {
  const previewArrow = document.getElementById('previewArrow');
  const nextArrow = document.getElementById('nextArrow');
  const slides = document.querySelectorAll('.testimony__testimony');

  const changeSlide = (change) => {
    const currentId = +document.querySelector('.testimony__testimony--show').dataset.id;
    let newId = currentId + change;

    (newId < 0) && (newId = slides.length - 1);
    (newId > slides.length - 1) && (newId = 0);

    slides[currentId].classList.remove('testimony__testimony--show');
    slides[newId].classList.add('testimony__testimony--show');
  };

  previewArrow.addEventListener('click', () => changeSlide(-1));
  nextArrow.addEventListener('click', () => changeSlide(1));
};

export default slider;