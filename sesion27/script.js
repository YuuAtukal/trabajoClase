
var lista = "";
document.getElementById("agregar").addEventListener("click", function () {
    var tarea = document.getElementById("tarea").value;
    var lista = localStorage.getItem("lista");
    if (lista) {
        lista = lista + "\n" + tarea + "\n";
    } else {
        lista = tarea + "\n";
    }
    localStorage.setItem("lista", lista);
    var tablaTarea = document.getElementById("tablaTarea").insertRow(0);
    var tareaCell = tablaTarea.insertCell(0);
    tareaCell.innerHTML = tarea;
    noTarea.innerHTML = "";
    document.getElementById("tarea").value = "";
})

document.getElementById("mostrar").addEventListener("click", function(){
    var lista = localStorage.getItem("lista");
    var tablaTarea = document.getElementById("tablaTarea");
    tablaTarea.innerHTML = "";
    //tareaCell.innerHTML = lista;
    listass.innerHTML = lista;
    noTarea.innerHTML = "";
})

document.getElementById("vaciar").addEventListener("click", function(){
    localStorage.removeItem("lista");
    var tablaTarea = document.getElementById("tablaTarea");
    tablaTarea.innerHTML = "";
    listass.innerHTML = "";
    noTarea.innerHTML = "No hay tareas guardadas";
})