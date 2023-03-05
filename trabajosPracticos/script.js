/*
//convertidor a fahrenheit

var grados = parseFloat(prompt("Ingrese una temperatura en celcius"));
var convert = (grados*1.8000+32);
console.log(grados+" grados celcius equivale a "+convert+" grados fahrenheit");
*/


/*
//piramide de asteriscos
var num = prompt("Introduce un número para la altura de la pirámide:");
var asteriscos = "";
for (var i = 1; i <= num; i++) {
  for (var j = 1; j <= i; j++) {
    asteriscos += "*";
  }
  asteriscos += "\n";
}

for (var i = num - 1; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    asteriscos += "*";
  }
  asteriscos += "\n";
}
console.log(asteriscos);
*/

/*
//calcular factorial
var fac = parseInt(prompt("Ingrese numero a calcular el factorial"));
var i = 1;
var total = 1; 

for (i; i<=fac; i++) {
    total = total * i; 
}
console.log("El factorial de "+ fac+" es "+total);
*/

/*
//cajero automatico
var actual = 50000;
var mov = "";
do {
    var opcion = parseInt(prompt("Ingrese una opcion: " + "\n" + "1) Extraer" + "\n" + "2) Depositar" + "\n" + "3) Consultar Saldo" + "\n" + "4) Ver ultimos Movimientos" + "\n" + "5) Salir"));
    if (opcion == 1) {
        var extraccion = parseFloat(prompt("Ingrese la cantidad a extraer"));
        if (extraccion < actual || extraccion == actual) {
            actual = actual - extraccion;
            mov += ("Extraido: "+extraccion)+"\n";
        }
        else {
            alert("EL retiro supera los fondos actuales");
        }
    }
    else if (opcion == 2) {
        var deposito = parseFloat(prompt("Ingrese la cantidad a depositar"));
        if (deposito > 0) {
            actual = actual + deposito;
            mov += ("Depositado: "+deposito)+"\n";
        }
        else {
            alert("El deposito no se puede realizar");
        }
    }
    else if (opcion == 3) {
        alert("Su saldo actual es: " + actual);
        mov += ("Saldo consulado: "+actual)+"\n";
    }
    else if (opcion == 4) {
        alert("Ultimos movimientos: "+"\n"+mov);
    }
    else if (opcion == 5) {
        alert("Operacion finalizada");
        break;
    }
} while (opcion <= 0 || opcion >= 6 || opcion - (opcion - 1) != 1 || opcion > 0 && opcion < 5);
//opcion-(opcion-1)!=1 es para que solo acepte numeros
//opcion>0 && opcion<5 es para que aparezca de nuevo el menu luego de una operacion
*/

/*
//fibonacci
var primero = 0;
var segundo = 1;
var secuencia = "";
var i = 0;
var n = parseInt(prompt("Ingrese un numero"));
for (i; i < n; i++) {
  secuencia += primero + " ";
  var suma = primero + segundo;
  primero = segundo;
  segundo = suma;
}
alert(secuencia);
*/