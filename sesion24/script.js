// ACCESO A NODOS

//MEDIANTE EL NOMBRE DE ETIQUETA ----> documents.getElementsByTagName
var parrafos = document.getElementsByTagName("p");
/*
for(var i = 0; i<parrafos.length;i++){
    console.log("Mostrando texto : "+ parrafos[i].innerText);
    console.log("Mostrando HTML : "+ parrafos[i].innerHTML);
}
*/

console.log("MOstrando por tag");
console.log("----------------");
for (var i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].innerText); //obtengo el texto interior de cada parrafo
}


for (var i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].innerHTML);//obtengo le HTML de cada parrafo
}

//MEDIANTE LA PROPIEDAD NAME ----> document.getElementsByName
var a = document.getElementsByName("parrafo1");
console.log("----------------");
console.log("Mostrando elementos por propiedad name");
for (i = 0; i < a.length; i++) {
    console.log(a[i].innerText);
}

//MEDIANTE EL ID ----> document.getElementById
console.log("----------------");
console.log("Mostrando con id")
var b = document.getElementById("boton");
console.log(b.innerText);


//MEDIANTE LA CLASE ----> document.getElementsByClassName
console.log("----------------");
console.log("Mostrando por clase");
var c = document.getElementsByClassName("saludo");
for (i = 0; i < c.length; i++) {
    console.log(c[i].innerText);
}


function poner() {
    var c = document.getElementById("textil");
    console.log(c.value);
}

var enlace = document.getElementById("Link");
console.log(enlace.href);
console.log(enlace.style.color);
console.log(enlace.className);
console.log(enlace.getAttribute("style"));

//''''--------------------------------------------------------
var miParrafo = document.getElementById("miParrafo");
miParrafo.setAttribute("class", "miClase");
miParrafo.style.color = "green";
miParrafo.innerText = "Hola, estamos hackeando la matrix!";