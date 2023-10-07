'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const students = document.getElementById('students');

  const fetchData = async () => {
    const response = await fetch('./json/students.json');
    const data = await response.json();
    console.log(data);
  };
  fetchData();
});