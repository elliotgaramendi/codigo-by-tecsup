'use strict';

import { contacts as contactsData, profile as profileData, technologies as technologiesData } from "../utils/portafolio.js";
import footer from "./footer.js";
import header from "./header.js";
import profile from "./profile.js";

const documentReady = () => {
  header();
  profile(profileData, technologiesData);
  footer(contactsData);
}

document.addEventListener('DOMContentLoaded', documentReady);