const express = require('express');
const app = express();
const cors = require('cors')
const conexion = require('./db')

app.use(cors())


app.get('/', (req,res) => {
    res.send("HOLA CAPO ESTA ES UNA API PARA LOS PIBES, COMO USARLA :  /usuarios : esto te dara una lista de usuarios")
});
app.get('/usuarios', (req,res) => {
    conexion.query('SELECT * FROM usuarios',(error,results)=>{
        if (error){
            throw error;
        }else{
            res.send(results)
        }
    }); 
});

app.listen(3000, () =>{
    console.log("andandooo")
});
 
const lista = {
    "producto": "pantalon",
    "precio" : 20
}