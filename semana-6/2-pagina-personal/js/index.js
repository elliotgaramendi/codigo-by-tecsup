'use strict';

import { contacts } from "../utils/contacts.js";
import footer from "./footer.js";
import header from "./header.js";
import profile from "./profile.js";

const documentReady = () => {
  header();
  profile();
  footer(contacts);
}

document.addEventListener('DOMContentLoaded', documentReady);