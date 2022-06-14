export class Pokemon {
  _id;
  _nombre;
  _tipo;
  _hp;
  _ataque;
  _especial;
  _urlImagen;

  constructor(id, nombre, tipo, hp, ataque, especial, urlImagen) {
    this._id = id;
    this._nombre = nombre;
    this._tipo = tipo;
    this._hp = hp;
    this._ataque = ataque;
    this._especial = especial;
    this._urlImagen = urlImagen;
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

  get tipo() {
    return this._tipo;
  }

  set tipo(tipo) {
    this._tipo = tipo;
  }

  get hp() {
    return this._hp;
  }

  set hp(hp) {
    this._hp = hp;
  }

  get ataque() {
    return this._ataque;
  }

  set ataque(ataque) {
    this._ataque = ataque;
  }

  get especial() {
    return this._especial;
  }

  set especial(especial) {
    this._especial = especial;
  }

  get urlImagen() {
    return this._urlImagen;
  }

  set urlImagen(urlImagen) {
    this._urlImagen = urlImagen;
  }
};