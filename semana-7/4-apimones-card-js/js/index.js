'use strict';
import header from './header.js';
import loader from './loader.js';

const documentReady = () => {
  loader();
  header();

  const objectPerson = {
    name: 'Elliot',
    goal: 'Ser un gran programador frontend',
    married: false,
    years: 26
  };

  const objectPersonJson = `{
    "name": "Elliot",
    "goal": "Ser un gran programador frontend",
    "married": false,
    "years": 26
  }`;

  console.log(objectPerson);
  console.log(objectPersonJson);

  console.log(JSON.stringify(objectPerson));
  console.log(JSON.parse(objectPersonJson));
};

document.addEventListener('DOMContentLoaded', documentReady);