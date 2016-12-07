function Animal (edad) {
  this.edad = edad;
}

Animal.prototype.crecer = function () {
  this.edad = this.edad + 1;
  return this.edad;
};

var iris = new Animal(3);
console.log(iris.crecer()); 

function Felino () {
}

Felino.prototype = new Animal();
Felino.prototype.constructor = Felino;

Felino.prototype.maullar = function () {
  console.log('meowwwww');
};

var iris = new Felino();
iris.crecer();
iris.maullar();