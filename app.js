const express = require('express');
const app = express();

app.get('/',function(peticion,respuesta){
    respuesta.send("hola santiago y mateo");
});

app.listen(3000,function(peticion, respuesta){
    console.log("hola mundo");
});
 

