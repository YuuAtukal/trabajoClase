const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactoSchema = new Schema({
    cliente: String,
    nombre: String,
    fecha_registro: Date,
    estado: String,
    tipo: String,
    descripcion: String
});

module.exports = mongoose.model("contacto", contactoSchema);