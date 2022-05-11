const loader = () => {
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('loader--hidden');
  });
};

export default loader;