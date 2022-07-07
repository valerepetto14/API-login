const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/',function(peticion,respuesta){
    respuesta.json(200, {productos : lista})
});

app.listen(3000, () =>{
    console.log("andandooo")
});
 
const lista = {
    "producto": "pantalon",
    "precio" : 20,
}