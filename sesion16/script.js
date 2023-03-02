//num1 entre num2
var num1 = parseInt(prompt("Ingrese un numero"));
var num2 = parseInt(prompt("Ingrese otro numero"));

if (num1 % num2 == 0){
    alert("El "+num1+" es divisible entre "+num2)
}
else{
    alert("El "+num1+" no es divisible entre "+num2)
}

//color primario

var color = prompt("Ingrese un color");

if (color == "amarillo" ||color == "azul" || color=="rojo"){
    alert("El "+color+" es un color primario")
}
else{
    alert("El "+color+" no es un color primario")
}

//numero entre 5 y 11
var num1 = parseInt(prompt("Ingrese un numero"));

if (num1 % 5 == 0 && num1 % 11 == 0){
    alert("El "+num1+" es divisible entre 5 y 11")
}
else{
    alert("El "+num1+" no es divisible entre 5 y 11")
}

//numero par
var num1 = parseInt(prompt("Ingrese un numero"));

if (num1 % 2 == 0){
    alert("El "+num1+" es par")
}
else{
    alert("El "+num1+" no es par")
}










