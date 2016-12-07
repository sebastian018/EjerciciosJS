var o = { a:0 }

Object.defineProperties(o, {
    "b": { get: function () { return this.a + 1; } },
    "c": { set: function (x) { this.a = x / 2; } }
});

o.c = 10          // Ejecuta el setter, que asigna 10/2 (5) a la propiedad 'a'
console.log(o.b) 