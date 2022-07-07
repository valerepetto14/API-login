const express = require('express');
const app = express();

app.get('/',function(peticion,respuesta){
    respuesta.send(200, {productos : lista})
});

app.listen(3000, () =>{
    console.log("andandooo")
});
 

const lista = {
    "producto": "pantalon",
    "precio" : 20,
}