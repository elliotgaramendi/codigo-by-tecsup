'use strict';
import header from './header.js';
import loader from './loader.js';

const documentReady = async () => {
  loader();
  header();

  // const objectPerson = {
  //   name: 'Elliot',
  //   goal: 'Ser un gran programador frontend',
  //   married: false,
  //   years: 26
  // };

  // const objectPersonJson = `{
  //   "name": "Elliot",
  //   "goal": "Ser un gran programador frontend",
  //   "married": false,
  //   "years": 26
  // }`;

  // console.log(objectPerson);
  // console.log(objectPersonJson);

  // console.log(JSON.stringify(objectPerson));
  // console.log(JSON.parse(objectPersonJson));

  // const operarNumerosCallback = (numero1, numero2, callback) => {
  //   return callback(numero1, numero2);
  // };
  // const resultado = operarNumerosCallback(8, 5, (n1, n2) => {
  //   return (n1 * n2);
  // });

  // let resultadoAsyn = 0;
  // const operarNumerosCallbackAsync = (numero1, numero2, callback) => {
  //   setTimeout(() => {
  //     callback(numero1, numero2);
  //   }, 1000);
  // };

  // operarNumerosCallbackAsync(8, 5, (n1, n2) => {
  //   resultadoAsyn = n1 * n2;
  //   console.log(resultadoAsyn);
  // });
  // console.log(resultadoAsyn);

  // const operarNumerosCallbackAsyncPromises = (numero1, numero2, callback) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(callback(numero1, numero2));
  //     }, 1000);
  //   });
  // };

  // let resultadoAsyn = 0;
  // const promesa = operarNumerosCallbackAsyncPromises(8, 5, (n1, n2) => {
  //   return n1 + n2;
  // }).then((response) => {
  //   resultadoAsyn = response;
  //   console.log(resultadoAsyn);
  // });
  // console.log(promesa);
  // console.log(resultadoAsyn);

  // const operarDatos = async () => {
  //   const response = await operarNumerosCallbackAsyncPromises(8, 5, (n1, n2) => {
  //     return n1 + n2;
  //   });
  //   return response;
  // };
  // const comida = await operarDatos();
  // console.log(comida);

  // Callback
  const saludar = () => {
    console.log('Hola');
  };

  const ejecutarCallback = (callback) => {
    callback();
  };

  ejecutarCallback(saludar);
};

document.addEventListener('DOMContentLoaded', documentReady);