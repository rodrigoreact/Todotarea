const express = require("express");
const cors = require("cors")
const app = express(); 
const PORT = 65239;//Siempre me pide cambiarlo, porque? Puerto del servidor.
const db = require('./utils/database'); 
const todoRouter = require('./routes/todo.route'); //importar rutas

//middlewares

app.use(cors());

app.use(express.json()); 


db.authenticate()
    .then(() => console.log("Autenticación exitosa."))
    .catch((error) => console.log(error)); 

db.sync()
    .then(() => console.log("Base de datos sincronizada."))
    .catch((error) => console.log(error));



app.use(todoRouter);

//Escuchando el puerto servidor
app.listen(PORT, () => {
    console.log(`servidor escuchando en puerto ${PORT}`);
})
