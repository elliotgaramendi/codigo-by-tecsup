const loader = () => {
  window.addEventListener('load', () => {
    document.getElementById('loader').classList.add('loader--hidden');
  });
};

export default loader;