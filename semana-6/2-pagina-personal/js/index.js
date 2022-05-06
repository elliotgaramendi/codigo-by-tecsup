'use strict';

import { contacts } from "../utils/contacts.js";
import footer from "./footer.js";

const documentReady = () => {
  footer(contacts);
}

document.addEventListener('DOMContentLoaded', documentReady);