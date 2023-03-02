/*

var x = 10;

if( x < 9 ){
    alert("Es menor a 10")
}
else{
    alert("Es mayor o igual a 10")
}

//switch

switch(x){
    case 10:
        alert("El valor es 10");
        break;
    case 9:
        alert("El valor es 9");
        break;
    case 7:
        alert("El valor es 7");
        break;
    default:
        alert("El valor es otro numero");
}


//calculadora 
var opcion = parseInt(prompt("Escoga una opcion: 1.Suma 2.Resta 3.Multiplicacion 4.Division"));

if(opcion<5 && opcion>0){
    var num1 = parseInt(prompt("Ingrese un numero"));
var num2 = parseInt(prompt("Ingrese otro numero"));
var operacion;
var total;

switch(opcion){
    case 1:
        total = (num1 + num2);
        operacion = "suma"
        break;
    case 2:
        total = (num1 - num2);
        operacion = "resta"
        break;
    case 3:
        total = (num1 * num2);
        operacion = "multiplicacion"
        break;
    case 4:
        if(num2!=0){
            total = (num1 / num2);
            operacion = "division"
            break;
        }
        else{
            alert("Tas re loko bro xdxd");
            break;
        }
}
if(opcion<5 && opcion>0 && num2!=0){
    alert("El resultado de la "+operacion+" entre "+num1+" y "+num2+" es "+total);
}

}
else{
    alert("Tas re loko bro xdxd")
}
*/

var numx = parseInt(prompt("Ingrese un numero"))
for( var i= 0; i<=numx-1; i++){
    alert("Hola "+i)
}


