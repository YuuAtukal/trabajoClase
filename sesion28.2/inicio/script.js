$(document).ready(function(){
    $("#compra_carrito").hide();
    $("#carrito").hide();
    $("#nosotro").hide();
    $("#botonComprar").hide();
    $("#TotalSms").hide();
    $("#CompraSms").hide();
    $("#recientesList").hide();
    $("#compraRecienteSms").hide();
    $("#cerrar").hide();
    $(".addOkSms").hide();
    

    $("#btn_compra_carrito").click(function(e){
        e.preventDefault();
        $("#compra_carrito").show();
        $("#carritoNo").show();
        $("#inicio").hide();
        $("#carrito").hide();
        $("#nosotro").hide();
        $("#CompraSms").hide();
        $("#recientesList").hide();
        $("#compraRecienteSms").hide();
        $("#cerrar").hide();
    })

    $("#inicia").click(function(e){
        e.preventDefault();
        $("#inicio").show();
        $("#carritoNo").show();
        $("#compra_carrito").hide();
        $("#carrito").hide();
        $("#nosotro").hide();
        $("#CompraSms").hide();
        $("#recientesList").hide();
        $("#compraRecienteSms").hide(); 
        $("#cerrar").hide(); 
    }) 

    $("#descripcion").click(function(e){
        e.preventDefault();
        $("#carrito").show();
        //$("#carritoNo").show();
        $("#inicio").hide();
        $("#compra_carrito").hide();
        $("#nosotro").hide();
        $("#CompraSms").hide();
        $("#cerrar").hide();
        
    })

    $("#nosotros").click(function(e){
        e.preventDefault();
        $("#nosotro").show();
        $("#carritoNo").show();
        $("#inicio").hide();
        $("#compra_carrito").hide();
        $("#carrito").hide();
        $("#CompraSms").hide();
        $("#recientesList").hide();
        $("#compraRecienteSms").hide();
        $("#cerrar").hide();
    })

    $("#botonComprar").click(function(e){
        e.preventDefault();
        $("#lista").empty();
        $("#CompraSms").show();
        $("#carritoNo").show();
        $("#botonMostrar").show();
        $("#lista").hide();
        $("#inicio").hide();
        $("#compra_carrito").hide();
        $("#carrito").hide();
        $("#nosotro").hide();
        $("#recientesList").hide();
        $("#botonComprar").hide();
        $("#TotalSms").hide();
        $("#compraRecienteSms").hide();
    })

    var total = 0;
    var recientes = "";

    $("#recientesList").html("<ul></ul>");

    $(".agregar").click(function(){
        $("#botonComprar").show();
        $("#TotalSms").show();
        $("#lista").show();
        $("#carritoNo").hide();
        $("#botonMostrar").hide();
        $("#compraRecienteSms").hide();
        $(".addOkSms").show();
        $(".addOkSms").fadeOut(1500);
        var precio = $(this).data("precio");
        var product = $(this).data("product");
        var lista = document.getElementById("lista").insertRow(0)
        var compraCell = lista.insertCell(0)
        if(precio){
            total = total + precio;
        }
        else{
            total = precio;
        }
        $("#total").text(total);
        $("#total").show();
        compraCell.innerHTML = product+ " "+ "$"+precio; // -->  $("#compraCell").html(product + " " + "$" + precio);
        recientes += "<li>" + compraCell.innerHTML+"</li>\n"; // --> recientes += "<li>" + $("#compraCell").html+"</li>\n";
        $("#recientesList ul").html(recientes);
        localStorage.setItem("Compras", recientes);
    })

    $("#botonMostrar").click(function(){
        var recientes = localStorage.getItem("Compras");
        $("#recientesList ul").html(recientes);
        $("#recientesList").show();
        $("#cerrar").show();
        $("#compraRecienteSms").show();
        $("#CompraSms").hide();
        $("#carritoLista").hide();
        $("#lista").hide();
        $("#TotalSms").hide();
        $("#botonComprar").hide();
        $("#carritoNo").hide();
        
    })

    $("#btnSeleccionar").click(function(){
        var categoria = $("#category").val();
        if(categoria == "Todos"){
            $("#escolar").show();
            $("#electronics").show();
            $("#ropa").show();
        }

        else if(categoria == "Escolar"){
            $("#escolar").show();
            $("#electronics").hide();
            $("#ropa").hide();
        }

        else if(categoria == "Electronica"){
            $("#electronics").show();
            $("#escolar").hide();
            $("#ropa").hide();
        }

        else if(categoria == "Ropa"){
            $("#ropa").show();
            $("#electronics").hide();
            $("#escolar").hide();
        }
    });

    $("#cerrar").click(function(){
        $("#carritoNo").show();
        $("#compraRecienteSms").hide();
        $("#cerrar").hide();
        $("#compraRecienteSms").hide();
        $("#recientesList").hide();
    });
   
});