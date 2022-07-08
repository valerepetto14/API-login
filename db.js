const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'valentin',
    database: 'pruebas'
});

conexion.connect((error)=>{
    if(error){
        throw error;
    }
    console.log("conexion arriba")
});

module.exports = conexion