document.getElementById("guardar1").addEventListener("click", function () {
    var PrimerNombre = document.getElementById("Nombre1").value
    var apellido = document.getElementById("Apellido").value
    var Email = document.getElementById("correo").value
    var telefono = document.getElementById("Telefono").value
    var fecha = document.getElementById("fecha").value
    var tablaCliente = document.getElementById("tablaCliente").insertRow(0)
    var nombreCell = tablaCliente.insertCell(0)
    var correoCell = tablaCliente.insertCell(1)
    var telCell = tablaCliente.insertCell(2)
    var fechaCell = tablaCliente.insertCell(3)
    nombreCell.innerHTML = PrimerNombre + " " + apellido;
    correoCell.innerHTML = Email;
    telCell.innerHTML = telefono;
    fechaCell.innerHTML = fecha;
})
var cantidad = []
document.getElementById("Guardar").addEventListener("click", function () {
    var nombre = document.getElementById("producto").value
    var cantidadx = document.getElementById("cantidad").value
    var precio = document.getElementById("precio").value

    var tablaCliente = document.getElementById("tablaProducto").insertRow(0)

    var cantidadxCell = tablaCliente.insertCell(0)
    var nombreCell = tablaCliente.insertCell(1)
    var precioCell = tablaCliente.insertCell(2)

    cantidadxCell.innerHTML = cantidadx;
    nombreCell.innerHTML = nombre;
    precioCell.innerHTML = precio;
})
