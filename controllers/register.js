const conexion = require('../db')
const bcrypt = require('bcrypt');

const regis = async (req, res) =>{
    const { body }= req
    const { user, name, lastname, rol, pass } = body
    const passcrypt = await bcrypt.hash(pass, 8)
    conexion.query('INSERT INTO usuarios SET ?',{user:user, name:name, lastname:lastname, rol:rol, pass:passcrypt},(error,results)=>{
        if (error){
            throw error;
        }else{
            res.send("registrado")
        }
    });
}

module.exports = {
    regis: regis
}