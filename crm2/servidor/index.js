// Paquetes y módulos
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

mongoose
  .connect(
    "mongodb+srv://yuuhyunaa:12345@cluster0.ohdjeol.mongodb.net/To_Do_List?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Conectado a la Base de Datos To_Do_List");
  })
  .catch(function (err) {
    console.log(err);
  });
//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.resolve("../cliente/")));

//Modelos de datos
const Tarea = require("./models/tareas");
const Contacto = require("./models/contactos");

//Rutas

/* ------ READ ------ */
//Sitio web principal (primera)
app.get("/clientes", function(req, res) {
  res.sendFile(path.resolve("../cliente/index.html"));
});

app.get("/primera", function (req, res) {
  res.sendFile(path.resolve("../cliente/primera.html"));
});

app.get("/contactos", function (req, res) {
  res.sendFile(path.resolve("../cliente/contactos.html"));
});

// Buscar en la base de datos los documentos de la coleccion
app.get("/prueba", async function (req, res) {
  let documentos = await Tarea.find();
  console.log(documentos);
  res.send(documentos);
});

app.get("/prueba2", async function (req, res) {
  let documentos = await Contacto.find();
  console.log(documentos);
  res.send(documentos);
});

/* ------ CREATE ------ */
// Inserta un nuevo cliente en la Base de Datos
app.post("/nuevaTarea", async function (req, res) {
  console.log(req.body);
  let task = new Tarea(req.body);
  await task.save();
  res.send("La tarea se registró correctamente!");
});

// Inserta un nuevo contacto en la Base de Datos
app.post("/nuevaTarea2", async function (req, res) {
  console.log(req.body);
  let task = new Contacto(req.body);
  await task.save();
  res.send("El contacto se registró correctamente!");
});


app.post("/tarea/:id/:nombre_tarea", async function (req, res) {
  let id_tarea = req.params.id;
  let nom_tarea = req.params.nombre_tarea;
  let documento = await Tarea.findById(id_tarea); //consultamos la BD
  res.send(documento);
});


//ELIMINAR
app.get("/eliminar/:id", async function (req, res) {
  let id_tarea = req.params.id;

  await Tarea.findByIdAndRemove(id_tarea);

  res.redirect("/");
});

//puerto del servidor
app.listen(3000, function () {
  console.log("Servidor OK!!!");
});