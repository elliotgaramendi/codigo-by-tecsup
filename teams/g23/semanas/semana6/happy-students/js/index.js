'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const students = document.getElementById('students');

  const fetchData = async () => {
    const response = await fetch('./json/students.json');
    const data = await response.json();
    data.forEach(element => {
      const { id, name, age, keywords, location, description, youtube, github, linkedin, instagram, image } = element;
      students.innerHTML += `
        <div class="card" key="${id}">
          <img src="${image || 'https://em-content.zobj.net/source/whatsapp/268/boar_1f417.png'}" alt="${name}" width="200"
            height="200" class="img" />
          <h1 class="card__title">
            ${name}
            <sup>${age}</sup>
          </h1>
          <h2 class="card__subtitle">${keywords}</h2>
          <span class="card__subtitle">${location}</span>
          <p class="card__text">${description}</p>
          <ul class="list">
            <li>
              <a href="https://www.youtube.com/${youtube}" class="link">
                <i class="bi bi-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/${github}" class="link">
                <i class="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/${linkedin}/" class="link">
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/${instagram}/" class="link">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      `;
    });
  };
  fetchData();
});