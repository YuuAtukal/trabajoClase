/*
var a = 10;
var b = 5;

function suma(x,b){
    var total = x+b;
    console.log(total);
    b++
}
suma(a,b);
console.log("b = "+b);
console.log(total);
*/



//convertir a mayusculas o minusculas
var opcion = parseInt(prompt("Ingrese una opcion "+"\n"+"1) Convertir a mayusculas"+"\n"+"2) Convertir a minusculas"+"\n"+"3) Imprimir lo mismo"));
var a = prompt("Ingrese un texto");
switch (opcion){ 
    case 1:
        a = mayusculas(a);
        break;
        
    case 2:
        a = minusculas(a);
        break;

    case 3:
        break;
}

console.log("El resultado es "+a);
function mayusculas(a){
    return a.toUpperCase();
}
function minusculas(a){
    return a.toLowerCase();
}

