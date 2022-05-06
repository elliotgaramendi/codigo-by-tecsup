'use strict';
// import { Producto } from "./Producto.js";
let productos = [
  new Producto('Laptop', 8000, 'MSI', 'Tecnología', 10),
  new Producto('Desktop', 4000, 'Lenovo', 'Tecnología', 15),
  new Producto('Monitor', 1500, 'BenQ', 'Tecnología', 20),
  new Producto('Impresora 3D', 3000, 'EPSON', 'Tecnología', 5),
  new Producto('Redmi Note 10', 1800, 'Xiaomi', 'Tecnología', 50),
  new Producto('Cargador', 100, 'Huawei', 'Tecnología', 100)
];

const contenedorError = document.querySelector('#contenedorError');

const resetForm = () => {
  const documentFormProducto = document.forms['formProducto'];
  documentFormProducto['id'].value = '';
  documentFormProducto['nombre'].value = '';
  documentFormProducto['precio'].value = '';
  documentFormProducto['marca'].value = '';
  documentFormProducto['categoria'].value = '';
  documentFormProducto['stock'].value = '';
};

const createProduct = () => {
  // 1
  const documentFormProducto = document.forms['formProducto'];
  const nombre = documentFormProducto['nombre'].value;
  const precio = documentFormProducto['precio'].value;
  const marca = documentFormProducto['marca'].value;
  const categoria = documentFormProducto['categoria'].value;
  const stock = documentFormProducto['stock'].value;

  // 2
  if ([nombre.trim(), precio.trim(), marca.trim(), categoria.trim(), stock.trim()].includes('')) {
    contenedorError.innerHTML = 'Completar todos los campos';
  } else {
    productos = [...productos, new Producto(nombre, +precio, marca, categoria, +stock)];

    // 3
    resetForm();
    readProducts();
  }
};

const readProducts = () => {
  const tBodyProducto = document.querySelector('#tBodyProducto');
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
        <td>
          <button
            class="bg-success rounded border-0 p-0"
            onclick="readProduct(${id})"
          >
            ✏
          </button>
          <button
            class="bg-danger rounded border-0 p-0"
            onclick="deleteProduct(${id})"
          >
            🗑
          </button>
        </td>
      </tr>
    `
  });
};

const readProduct = (productId) => {
  const documentFormProducto = document.querySelector('#formProducto');
  const formTitle = document.querySelector('#formTitle');
  const formButton = document.querySelector('#formButton');

  const producto = productos.find((element) => {
    return element.id === productId;
  });
  const { id, nombre, precio, marca, categoria, stock } = producto;

  formTitle.innerHTML = 'Editar producto';
  formButton.innerHTML = 'Editar';
  documentFormProducto['id'].value = id;
  documentFormProducto['nombre'].value = nombre;
  documentFormProducto['precio'].value = precio;
  documentFormProducto['marca'].value = marca;
  documentFormProducto['categoria'].value = categoria;
  documentFormProducto['stock'].value = stock;
}

const updateProduct = () => {
  // 1
  const documentFormProducto = document.forms['formProducto'];
  const formTitle = document.querySelector('#formTitle');
  const formButton = document.querySelector('#formButton');
  const id = documentFormProducto['id'].value;
  const nombre = documentFormProducto['nombre'].value;
  const precio = documentFormProducto['precio'].value;
  const marca = documentFormProducto['marca'].value;
  const categoria = documentFormProducto['categoria'].value;
  const stock = documentFormProducto['stock'].value;

  // 2
  if ([nombre.trim(), precio.trim(), marca.trim(), categoria.trim(), stock.trim()].includes('')) {
    contenedorError.innerHTML = 'Completar todos los campos';
  } else {
    productos = productos.map((element) => {
      if (element.id !== +id) {
        return element;
      } else {
        element.nombre = nombre;
        element.precio = +precio;
        element.marca = marca;
        element.categoria = categoria;
        element.stock = +stock;
        return element;
      }
    });

    // 3
    resetForm();
    formTitle.innerHTML = 'Crear producto';
    formButton.innerHTML = 'Crear';
    readProducts();
  }
};

const deleteProduct = (id) => {
  if (confirm('¿Está seguro que desea eliminarlo?')) {
    productos = productos.filter((element) => {
      return element.id !== id;
    });
    readProducts();
  }
};

const documentReady = () => {
  const formProducto = document.querySelector('#formProducto');

  const submitProduct = (e) => {
    e.preventDefault();
    const id = document.getElementById('formId').value;
    if (id === '') {
      createProduct();
    } else {
      updateProduct();
    }
  };

  readProducts();
  formProducto.addEventListener('submit', submitProduct);
};

document.addEventListener('DOMContentLoaded', documentReady);