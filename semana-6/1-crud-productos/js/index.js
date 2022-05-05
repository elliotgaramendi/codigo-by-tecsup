'use strict';
import { Producto } from "./Producto.js";

const documentReady = () => {
  const productos = [
    new Producto('Laptop', 8000, 'MSI', 'Tecnología', 10),
    new Producto('Desktop', 4000, 'Lenovo', 'Tecnología', 15),
    new Producto('Monitor', 2000, 'BenQ', 'Tecnología', 20)
  ];

  const tBodyProducto = document.querySelector('#tBodyProducto');
  const formProducto = document.querySelector('#formProducto');
  const contenedorError = document.querySelector('#contenedorError');

  const createProduct = (e) => {
    e.preventDefault();
    const documentFormProducto = document.forms['formProducto'];
    const nombre = documentFormProducto['nombre'].value;
    const precio = documentFormProducto['precio'].value;
    const marca = documentFormProducto['marca'].value;
    const categoria = documentFormProducto['categoria'].value;
    const stock = documentFormProducto['stock'].value;

    if ([nombre.trim(), precio.trim(), marca.trim(), categoria.trim(), stock.trim()].includes('')) {
      contenedorError.innerHTML = 'Completar todos los campos';
    } else {
      productos.push(new Producto(nombre, +precio, marca, categoria, +stock));
      documentFormProducto['nombre'].value = '';
      documentFormProducto['precio'].value = '';
      documentFormProducto['marca'].value = '';
      documentFormProducto['categoria'].value = '';
      documentFormProducto['stock'].value = '';
      readProducts();
    }
  };

  const readProducts = () => {
    tBodyProducto.innerHTML = '';

    productos.forEach((element) => {
      const { id, nombre, precio, marca, categoria, stock } = element;
      tBodyProducto.innerHTML += `
        <tr>
          <th>${id}</th>
          <td>${nombre}</td>
          <td>${precio.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</td>
          <td>${marca}</td>
          <td>${categoria}</td>
          <td>${stock}</td>
        </tr>
      `
    });
  };

  readProducts();
  formProducto.addEventListener('submit', createProduct);
}

document.addEventListener('DOMContentLoaded', documentReady);