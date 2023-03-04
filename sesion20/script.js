/*
//residuos
var num1 = parseInt(prompt("Ej.1 Ingrese un numero"));
var i = 0;
while(i<num1){
    if(i % 3 == 2){
        console.log(i+" tiene residuo 2 al dividirlo entre 3")
    }
    i = i + 1;
}
*/

/*
//letra x veces
var letra = prompt("Ej.2 Ingrese una letra");
var num2 = parseInt(prompt("Ingrese un numero"));
i = 0;
var cadena = "";

while(i<num2){
    cadena +=letra;
    i = i + 1;
}
alert("La cadena es "+cadena)
*/

/*
//calculadora de media
alert("Ej.3 Calculadora de media aritmetica");
var num3 = parseInt(prompt("Ingrese el primer numero"));
var num4 = parseInt(prompt("Ingrese el segundo numero"));
var num5 = parseInt(prompt("Ingrese el tercer numero"));
var num6 = parseInt(prompt("Ingrese el cuarto numero"));
var suma = num3+num4+num5+num6;
var media = suma/4;
alert("La media aritmetica es "+media);
*/

/*
//piramide
alert("Ej.4 Piramide con asterisco");
var cantidad = parseInt(prompt("Ingrese un numero"));
var cadena = ""; //aqui se contiene a la piramide
var fila = ""; //aqui se guaran los asteriscos
var j = 1;
i = 1;

for (i; i <= cantidad; i++) {
  for (j; j <= i; j++) {
    fila += "*";
  }
    cadena+= fila + "\n";
}
console.log(cadena);
*/


/*
//contador base 5
alert("Ej.5 Contador base 5");
var count1 = 0;
var count2 = 1;

for(count1;count1<=4;count1++){
    console.log("0:"+count1)
    if(count1==4){
        console.log("1:0")
        for(count2;count2<=4;count2++){
            console.log("1:"+count2)
        }
    }
}
*/


/*
//vueltas deportista
alert("Ej.6 Vueltas deportista");
var vueltas = parseInt(prompt("Ingrese el numero de vueltas"))
i = 0;
var tiempos;
var suma = 0;
var listax = "";

for(i;i<vueltas;i++){
    tiempos = parseFloat(prompt("Ingrese el tiempo de la vuelta "+(i+1)+" en segundos"));
    listax += tiempos +"\n";
    suma += tiempos;
}
var promedio = suma/vueltas;
alert("Cantidad de vueltas: "+vueltas+"\n"+listax+"Promedio: "+promedio);
*/