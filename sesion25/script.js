//event listener
/*
//var btn = document.getElementById("boton");
var texto = document.getElementById("texto");


texto.addEventListener("input", function(){
    resultado1.innerText = texto.value +"\n";
    resultado2.innerText = texto.value +"\n";
    resultado3.innerText = texto.value.toUpperCase() +"\n";
    resultado4.innerText = texto.value +"\n";

    var inverso = "";
    var i = texto.value.length;

    for(i; i>=0; i--){
    inverso += texto.value.slice(i-1,i);
    } 
    resultado5.innerText = inverso;
});
*/

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btn = document.getElementById("suma");
var btn2 = document.getElementById("resta");
var btn3 = document.getElementById("multiplicacion");
var btn4 = document.getElementById("division");

btn.addEventListener("click",function(){
    var resultado = parseInt(num1.value) + parseInt(num2.value);
    return resultado;
});
btn2.addEventListener("click",function(){
    var resultado = parseInt(num1.value) - parseInt(num2.value);
    return resultado;
});
btn3.addEventListener("click",function(){
    var resultado = parseInt(num1.value) * parseInt(num2.value);
    return resultado;
});
btn4.addEventListener("click",function(){
    if (parseInt(num2.value) === 0) {
        alert("Error: no se puede dividir por cero.");
    } else {
        var resultado = parseInt(num1.value) / parseInt(num2.value);
        return resultado;
    }
});
