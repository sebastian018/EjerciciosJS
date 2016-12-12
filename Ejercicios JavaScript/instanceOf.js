function Coche(fabricante, modelo, ejercicio) {
   this.fabricante = fabricante;
   this.modelo = modelo;
   this.ejercicio= ejercicio;
}

miCoche = new Coche("Honda", "Accord", 1998);
a = miCoche instanceof Coche;
b = miCoche instanceof Object;