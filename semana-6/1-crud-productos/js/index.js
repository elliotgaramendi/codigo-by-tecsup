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

const contenedorAlerta = document.querySelector('#contenedorAlerta');
let timeoutId = 0;

const showAlert = (type, content) => {
  clearTimeout(timeoutId);
  contenedorAlerta.classList.remove('bg-primary');
  contenedorAlerta.classList.remove('bg-success');
  contenedorAlerta.classList.remove('bg-danger');
  switch (type) {
    case 'primary':
      contenedorAlerta.classList.add('bg-primary');
      break;
    case 'success':
      contenedorAlerta.classList.add('bg-success');
      break;
    case 'danger':
      contenedorAlerta.classList.add('bg-danger');
      break;
    default:
      contenedorAlerta.classList.add('bg-primary');
      break;
  }
  contenedorAlerta.innerHTML = content;
  timeoutId = setTimeout(() => {
    contenedorAlerta.innerHTML = '';
  }, 5000);
};

const getFormData = () => {
  const documentFormProducto = document.forms['formProducto'];
  const id = documentFormProducto['id'].value;
  const nombre = documentFormProducto['nombre'].value;
  const precio = documentFormProducto['precio'].value;
  const marca = documentFormProducto['marca'].value;
  const categoria = documentFormProducto['categoria'].value;
  const stock = documentFormProducto['stock'].value;

  return ({ id, nombre, precio, marca, categoria, stock });
};

const validateForm = () => {
  const documentFormProducto = document.forms['formProducto'];
  const nombre = documentFormProducto['nombre'].value;
  const precio = documentFormProducto['precio'].value;
  const marca = documentFormProducto['marca'].value;
  const categoria = documentFormProducto['categoria'].value;
  const stock = documentFormProducto['stock'].value;

  return [nombre.trim(), precio.trim(), marca.trim(), categoria.trim(), stock.trim()].includes('');
};

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
  const { nombre, precio, marca, categoria, stock } = getFormData();
  if (validateForm()) {
    showAlert('danger', 'Completar todos los campos');
  } else {
    productos = [...productos, new Producto(nombre, +precio, marca, categoria, +stock)];
    resetForm();
    readProducts();
    showAlert('primary', 'Registro creado');
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
  showAlert('primary', 'Registros leídos');
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
  showAlert('primary', 'Registro leído');
};

const updateProduct = () => {
  const { id, nombre, precio, marca, categoria, stock } = getFormData();
  const formTitle = document.querySelector('#formTitle');
  const formButton = document.querySelector('#formButton');

  if (validateForm()) {
    showAlert('danger', 'Completar todos los campos');
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

    resetForm();
    formTitle.innerHTML = 'Crear producto';
    formButton.innerHTML = 'Crear';
    readProducts();
    showAlert('success', 'Registro actualizado');
  }
};

const deleteProduct = (id) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success mx-2',
      cancelButton: 'btn btn-danger mx-2'
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: '¿Está seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '¡Sí, elimínalo!',
    cancelButtonText: '¡No, cancélalo!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      productos = productos.filter((element) => {
        return element.id !== id;
      });
      readProducts();
      showAlert('danger', 'Registro eliminado');
      swalWithBootstrapButtons.fire(
        '¡Eliminado!',
        'Tu registro ha sido eliminado.',
        'success'
      );
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu registro está seguro',
        'error'
      );
    }
  });
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