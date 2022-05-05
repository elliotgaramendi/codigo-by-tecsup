// export class Producto {
class Producto {

  static contadorProducto = 0;

  _id;
  _nombre;
  _precio;
  _marca;
  _categoria;
  _stock;

  constructor(nombre, precio, marca, categoria, stock) {
    this._id = ++Producto.contadorProducto;
    this._nombre = nombre;
    this._precio = precio;
    this._marca = marca;
    this._categoria = categoria;
    this._stock = stock;
  }

  get id() {
    return this._id;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get categoria() {
    return this._categoria;
  }

  set categoria(categoria) {
    this._categoria = categoria;
  }

  get stock() {
    return this._stock;
  }

  set stock(stock) {
    this._stock = stock;
  }
};