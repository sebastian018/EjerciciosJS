function f() {
  return Array.from(arguments);
}

f(1, 2, 3); 


Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());

Array.of(1);         
Array.of(1, 2, 3);   
Array.of(undefined);