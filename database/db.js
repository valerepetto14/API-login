const mysql = require('mysql2');

const conexion = mysql.createPool({
    connectionLimit : 10,
    host: '54.94.125.72',
    user: 'valentin',
    password: 'Valentin2415@',
    database: 'login'
});

conexion.connect((error)=>{
    if(error){
        throw error;
    }
    console.log("conexion arriba")
});

module.exports = conexion