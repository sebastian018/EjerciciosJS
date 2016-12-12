function mostrarMensaje1() {  
var edad;
edad = prompt ('Por favor introduce edad:');
if (edad =="") { alert ('No has introducido edad'); }
edad = Number(edad);
        switch (edad) {
            case 0: alert ("Acaba de nacer hace poco. No ha cumplido el año"); break;
            case 18: alert ("Está justo en la mayoría de edad"); break;
            case 65: alert ("Está en la edad de jubilación"); break;
            default: alert ("La edad no es crítica"); break;
        }
}