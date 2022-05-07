'use strict';

import models from "./models.js";

const documentReady = () => {
  models();
}

document.addEventListener('DOMContentLoaded', documentReady);