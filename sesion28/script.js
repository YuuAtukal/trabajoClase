$(document).ready(function(){
    //aqui va mi codigo
    //document.getElementById("link");
    //addEventListener
    $("#btn").click(function(){
        //e.preventDefault(); //previene el comportamiendo por defecto que tiene e    
        /* $("#texto").text("Hola que tal?");
        $("#texto").css("background-color","blue");
        $("#texto").fadeOut(1500); */
        //$("#texto").css('font-size',"60");
        var tamano = $('#tamano').val();
        var fuente = $('#fuente').val();
        var color = $('#color').val();
        $(".texto").css({
            "font-size": tamano,
            "font-family": fuente,
            "color": color
        });
    });
});