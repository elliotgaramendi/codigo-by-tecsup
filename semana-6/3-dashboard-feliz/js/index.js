'use strict';

import { allData } from "../utils/allData.js";
import models from "./models.js";

const documentReady = () => {
  models(allData);
}

document.addEventListener('DOMContentLoaded', documentReady);