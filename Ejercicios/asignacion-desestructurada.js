
function f() {
  return [1, 2, 3];
}
 
var [a, , b] = f();
console.log ("A es " + a + " B es " + b);