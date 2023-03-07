//guardar en array
/*
var num = parseInt(prompt("Ingrese un numero"));
var cadena = [];
var i = 0;
for (i;i<num;i++){
    cadena[i] = prompt("Ingrese algo "+(i+1)); 
}
alert(cadena);
*/

/*
//numero menor
var cantidad = parseInt(prompt("Ingrese cantidad de numeros"));
var numeros = [];
var c = 0;
var i = 0;

for(c;c<cantidad;c++){
    numeros[c] = parseInt(prompt("Ingrese numero "+(c+1)));
}
var min = numeros[0];
for (i; i < cantidad ; i++) {
    if (numeros[i] < min) {
        min = numeros[i];
    }
}
alert("El minimo es "+min);
*/

/*
//buscador de numeros
var cantidad2 = parseInt(prompt("Ingrese la cantidad de numeros"));
var cadena2 = [];
var cont = 0;
var valor;

for (cont;cont<cantidad2;cont++){
    cadena2[cont] = parseInt(prompt("Ingrese valor "+(cont+1)));
}
var tar = parseInt(prompt("Ingrese numero a buscar"));
cont = 0;
for(cont;cont<cantidad2;cont++){
    if(tar == cadena2[cont]){
        valor = 1;
    }
    else{
        valor = 0;
    }
}
if(valor == 1){
    alert("El numero "+tar+" se encuentra entre los datos");
}
else{
    alert("El numero "+tar+" NO se encuentra entre los datos");
}
*/

var cantfr = parseInt(prompt("Ingrese la cantidad de frutas"));
var cont2 = 0;
var frutas = [];


while (cont2 < cantfr) {
  frutas[cont2] = prompt("Ingrese fruta " + (cont2 + 1));
  cont2++;
}

cont2 = 0;
cantidad = [];

//contador
while (cont2 < cantfr) {
  var cont3 = 0;
  cantidad[cont2] = 0; // se inicializa la cantidad de frutas en 0

  while (cont3 < cantfr) {
    if (frutas[cont2] == frutas[cont3]) {
      cantidad[cont2] = cantidad[cont2] + 1;
    }
    cont3 = cont3 + 1;
  }
  cont2 = cont2 + 1;
}
// se muestra la lista de frutas y la cantidad de ellas
var resultado = "La lista de frutas y la cantidad de ellas es:\n";
for (var i = 0; i < cantfr; i++) {
  resultado += frutas[i] + ": " + cantidad[i] + "\n";
}
alert(resultado);





