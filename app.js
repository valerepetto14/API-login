const express = require('express');
const app = express();
const cors = require('cors')
const conexion = require('./db')

app.use(cors())
app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.render('index')
});
app.get('/usuarios', (req,res) => {
    conexion.query('SELECT * FROM usuarios',(error,results)=>{
        if (error){
            throw error;
        }else{
            hola = JSON.parse(req);
            res.send(hola)
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