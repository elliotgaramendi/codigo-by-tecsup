'use strict';
import { contacts } from "../utils/contacts.js";

const documentReady = () => {
  const footerNavLinkList = document.querySelector('.footer-nav__link-list');
  contacts.filter(element => element.main).forEach((element) => {
    footerNavLinkList.innerHTML += `
      <li class="footer-nav__link-item">
        <a href="${element.urlContact}" class="footer-nav__link">
          <img src="${element.urlImage}" alt="${element.name}" class="footer-nav__link-image" />
        </a>
      </li>
    `;
  });
}

document.addEventListener('DOMContentLoaded', documentReady);