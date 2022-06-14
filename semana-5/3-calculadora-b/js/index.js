'use strict';
const documentReady = () => {
  const formCalculadora = document.getElementById('formCalculadora');

  const calcular = (e) => {
    e.preventDefault();

    const numero1 = parseInt(document.getElementById('numero1').value);
    const operador = document.getElementById('operador').value;
    const numero2 = parseInt(document.getElementById('numero2').value);
    const contenedorResultado = document.getElementById('contenedorResultado');

    if (isNaN(numero1) || isNaN(numero2)) {
      contenedorError.innerHTML = 'Completar el formulario';
    } else {
      let resultado = 0;
      contenedorError.innerHTML = '';
      switch (operador) {
        case '+':
          resultado = numero1 + numero2;
          break;
        case '-':
          resultado = numero1 - numero2;
          break;
        case '*':
          resultado = numero1 * numero2;
          break;
        case '/':
          if (numero1 === 0 || numero2 === 0) {
            contenedorError.innerHTML = 'Los operadores no pueden ser cero';
          } else {
            resultado = numero1 / numero2;
          }
          break;
        default:
          contenedorError.innerHTML = 'Seleccionar una operación válida';
          break;
      }
      contenedorResultado.innerHTML = resultado;
    }
  };

  formCalculadora.addEventListener('submit', calcular);
}

document.addEventListener('DOMContentLoaded', documentReady);