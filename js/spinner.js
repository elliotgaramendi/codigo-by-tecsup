const spinner = () => {
  window.addEventListener('load', () => {
    const spinner = document.getElementById('spinner');
    spinner.classList.add('spinner--hidden');
  });
}

export default spinner;