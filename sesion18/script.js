/*
var numx = parseInt(prompt("Ingrese un numero"))
var pares = 0;
if(numx>0){
    if(numx % 2 == 0){
        for( var i= numx; i>0; i=i-2){
            pares = pares + 1;
        }
        alert("Hay "+pares+" numeros pares")
    }
    else{
        for( var i= numx; i>0; i=i-2){
            pares = pares + 1;
        }
        pares = pares-1;
        alert("Hay "+pares+" numeros pares")
    }
}
else{
    alert("No se puede bro xdxd")
}

var x = parseInt(prompt("Ingrese un numero"));

console.log("Talba de multiplicar del "+x+":");
for(var i=0;i<=10;i++){
    console.log(x + "x"+i+"="+x*i);
}
*/

/*
for(var i=10;i>=0;i--){
    document.write("<h2> "+i+" </h2>");
}
document.write("<h2> Despegue! </h2>");
*/




//while
var  num = parseInt(prompt("Ingrese un numero"));
var contador = 0;
while(num>=0){
    num = num -2;
    contador = contador + 1;
}
console.log("Hay "+contador+" numeros pares");