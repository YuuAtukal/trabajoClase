const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//un Schema es el modelo de datos o la forma de un documento

let modeloTareas = new Schema({
    nombre: String,
    detalle: String,
    pais: String,
    email: String,
    telefono: String,
    fecha_registro: String,
    finalizada: {
        type: Boolean,
        default: false,
    }, 
    fecha: String,
})

//exporto el modelo que creamos
module.exports = mongoose.model("tareas",modeloTareas);

