const FAQ = () => {
  const questions = document.querySelectorAll('.questions__question');

  questions.forEach(element => {
    element.addEventListener('click', () => {
      let height = 0;
      let answer = element.nextElementSibling;

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
      }

      answer.classList.toggle('questions__answer--open');
      element.children[1].classList.toggle('questions__arrow--rotate-180');
      answer.style.height = height + 'px';
    });
  });
};

export default FAQ;