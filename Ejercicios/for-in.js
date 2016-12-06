
function ejemploForIn() {
var dato = [2, 6, 5, 1, 18, 44];
var msgForNormal = '';
var msgForIn = '';

//For in
for (i in dato) { msgForIn = msgForIn + dato[i] + ' - '; }
alert ('msgForNormal contiene ' + msgForNormal + ' y msgForIn contiene '+ msgForIn);
}
