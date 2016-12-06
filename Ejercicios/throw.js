function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
        if(x == "")  throw "vacío";
        if(isNaN(x)) throw "No numero";
        x = Number(x);
        if(x < 5)    throw "Demasiado menor";
        if(x > 10)   throw "Demasiado alto";
    }
    catch(err) {
        message.innerHTML = "La Entrada es " + err;
    }
}