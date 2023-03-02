/*
var num = parseInt(prompt("Ingrese un numero"));
var i = 0;
var contador = 0;
//usando for
for(i;i<=num;i++){
    contador = contador + i;
}
console.log("La suma usando for es "+contador)
i = 0;
contador = 0;

//usando while
while(i<=num){
    contador = contador + i;
    i = i + 1;
}
console.log("La suma usando while es "+contador)

//usando do while
i = 0;
contador = 0;
do{
    contador = contador + i;
    i = i + 1;
}while(i<=num)
console.log("La suma usando do while es "+contador)
*/

/*
var texto = prompt("ingrese un texto");
var cantidad = texto.length;
//alert("tiene "+cantidad+" caracteres")
var i = 0;
var contador = 0;
var desde = 0;
var hasta = 1;
//alert("Empieza con la letra "+texto.slice(desde,hasta))
while(i<cantidad){
    if(texto.slice(desde,hasta)=="a"||texto.slice(desde,hasta)=="A"){
        contador = contador + 1;
    }
    i = i + 1;
    desde = desde +1;
    hasta = hasta +1;
}
alert("Hay "+contador+" letras a")



//inversor de texto
alert("Invertir un texto")
var texto = prompt("Ingrese un texto");
var inverso = "";

var i = texto.length;
   
for(i; i>=0; i--)
{
  inverso += texto.slice(i-1,i);
}
alert(inverso);
 */





//cambiador de letras

alert("Cambiador de letras")

var texto = prompt("Ingrese un texto");
var cantidad = texto.length;
var i = 0;
var desde = 0;
var hasta = 1;
var cambiado = "";
//alert("Empieza con la letra "+texto.slice(desde,hasta))
while(i<cantidad){
    if(texto.slice(desde,hasta)=="a"||texto.slice(desde,hasta)=="A"){
        cambiado+= "4";
    }
    else if(texto.slice(desde,hasta)=="e"||texto.slice(desde,hasta)=="E"){
        cambiado+="3";
    }
    else if(texto.slice(desde,hasta)=="i"||texto.slice(desde,hasta)=="I"){
        cambiado+="1";
    }
    else if(texto.slice(desde,hasta)=="o"||texto.slice(desde,hasta)=="O"){
        cambiado+="0";
    }
    else{
        cambiado+= texto.slice(desde,hasta);
    }
    i = i + 1;
    desde = desde +1;
    hasta = hasta +1;
}
alert("El texto cambiado es "+cambiado);
