function guardarDatos() {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var serie = document.getElementById("serie").value;

    localStorage.setItem("Nombre: ", nombre);
    localStorage.setItem("Apellido: ", apellido);
    localStorage.setItem("Direccion: ", direccion);
    localStorage.setItem("Telefono: ", telefono);
    localStorage.setItem("Serie: ", serie);
}

function recuperarDatos() {
    var nombre = localStorage.getItem("Nombre: ");
    var apellido = localStorage.getItem("Apellido: ");
    var direccion = localStorage.getItem("Direccion: ");
    var telefono = localStorage.getItem("Telefono: ");
    var serie = localStorage.getItem("Serie: ");

    document.getElementById("datosGuardados").innerHTML = "Nombre: " + nombre + "<br>" + "Apellido: " + apellido + "<br>" + "Direccion: " + direccion + "<br>" + "Telefono: " + telefono + "<br>" + "Serie: " + serie;
}