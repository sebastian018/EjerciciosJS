function sumar(){
     
  var suma=0;
  for (i = 0; i < arguments.length; i++) {
        suma+=parseInt(arguments[i]);
  }
  return suma;
}

console.log(sumar(2,2));
console.log(sumar(2));
console.log(sumar(2,2,2,2));