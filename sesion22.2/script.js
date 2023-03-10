
/*
function bienvenida(){
    var nombre = prompt("Ingrese su usuario");
    alert("Bienvenido "+nombre);
}
bienvenida();
*/

function suma(num1,num2){
    var sum = num1+num2;
    alert(sum);
}
var i = 0;
for(i;i<3;i++){
    var num1 = parseInt(prompt("Ingrese el primer numero"));
    var num2 = parseInt(prompt("Ingrese el segundo numero"));
    suma(num1,num2);
}