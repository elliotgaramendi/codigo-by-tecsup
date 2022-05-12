'use strict';
import card from './card.js';
import header from './header.js';
import loader from './loader.js';

const documentReady = () => {
  loader();
  header();
  card();

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

  // const saludar = () => {
  //   console.log('Hola');
  // };

  // const ejecutarCallback = (callback) => {
  //   callback();
  // };

  // ejecutarCallback(saludar);

  // const operarNumerosCallback = (numero1, numero2, callback) => {
  //   return callback(numero1, numero2);
  // };
  // const resultado = operarNumerosCallback(8, 5, (n1, n2) => {
  //   return (n1 * n2);
  // });

  // console.log(resultado);

  // const mandarMensaje1 = (fn) => {
  //   setTimeout(() => {
  //     console.log('Vamo a calmarno');
  //     fn();
  //   }, 1000);
  // };

  // const mandarMensaje2 = () => {
  //   console.log('-Pikachu sorprendido-');
  // };

  // mandarMensaje1(mandarMensaje2);

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

  // const datos = [
  //   {
  //     "name": "Pikachu",
  //     "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  //   },
  //   {
  //     "name": "Charizard",
  //     "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
  //   },
  //   {
  //     "name": "Venusaur",
  //     "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
  //   },
  //   {
  //     "name": "Vamo a calmarno",
  //     "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  //   },
  //   {
  //     "name": "Dragonite Mensajero",
  //     "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
  //   }
  // ];

  // const getDatos = () => {
  //   return datos;
  // };

  // const getDatos = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (datos.length) {
  //         resolve(datos);
  //       } else {
  //         reject(new Error('No existen datos'));
  //       }
  //     }, 2000);
  //   });
  // };

  // document.getElementById('spinner').classList.remove('spinner--hidden');
  // const respuesta = getDatos()
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  //   .finally(() => {
  //     document.getElementById('spinner').classList.add('spinner--hidden');
  //   });
  // console.log(respuesta);

  // document.getElementById('spinner').classList.remove('spinner--hidden');
  // const fetchApi = async () => {
  //   try {
  //     const data = await getDatos();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     document.getElementById('spinner').classList.add('spinner--hidden');
  //   }
  // };
  // fetchApi();
};

document.addEventListener('DOMContentLoaded', documentReady);