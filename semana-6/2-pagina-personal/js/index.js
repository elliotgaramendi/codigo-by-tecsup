'use strict';

import { contacts } from "../utils/contacts.js";
import footer from "./footer.js";
import header from "./header.js";

const documentReady = () => {
  header();
  footer(contacts);
}

document.addEventListener('DOMContentLoaded', documentReady);