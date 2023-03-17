$(document).ready(function(){
    //lo que aparezca aqui se va a ejecutar solo cuando el doc ande ready
    //document.getElementById("elemento").value;  esto ya no se usa bro

    /* //SELECTOR ID
    document.getElementById("elemento")
    $("#elemento");  //JQuery 

    //SELECTOR CLASS
    document.getElementsByClassName("btn");
    $("#btn")

    //value
    document.getElementById("dato").value;
    $("#dato").val();
    $("#dato").val(); */

    //calculadora
    $("#suma").click(function(){
        var n1 = $("#num1").val();
        var n2 = $("#num2").val();
        var total = parseInt(n1) + parseInt(n2);

        $("#resultado").text("El resultado de la suma es "+total);
    })

    $("#resta").click(function(){
        var n1 = $("#num1").val();
        var n2 = $("#num2").val();
        var total = parseInt(n1) - parseInt(n2);

        $("#resultado")
        .text("El resultado de la resta es "+total);
    })

    $("#multiplicacion").click(function(){
        var n1 = $("#num1").val();
        var n2 = $("#num2").val();
        var total = parseInt(n1) * parseInt(n2);

        $("#resultado")
        .text("El resultado de la multiplicacion es "+total);
    })

    $("#division").click(function(){
        var n1 = $("#num1").val();
        var n2 = $("#num2").val();
        var total = parseInt(n1) / parseInt(n2);

        $("#resultado")
        .text("El resultado de la division es "+total);
    })
})