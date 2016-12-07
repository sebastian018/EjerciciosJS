class Square{
  constructor(length) {
    // Aquí llama el constructor de la clase padre Polygon con las
    // longitudes de ancho y alto que deben proveerse para esta
    super(length, length);
    // Nota: En clases derivadas, super() debe ser invocado antes de que
    // 'this' pueda ser usado, de lo contrario causaría un error de referencia.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  } 
}