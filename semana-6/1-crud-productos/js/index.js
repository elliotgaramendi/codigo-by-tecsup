'use strict';
import { Producto } from "./Producto.js";

const documentReady = () => {
  const productos = [
    new Producto('Laptop', 8000, 'MSI', 'Tecnología', 10),
    new Producto('Desktop', 4000, 'Lenovo', 'Tecnología', 15),
    new Producto('Monitor', 2000, 'BenQ', 'Tecnología', 20)
  ];
}

document.addEventListener('DOMContentLoaded', documentReady);