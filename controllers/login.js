const conexion = require('../db')
const bcrypt = require('bcrypt');

const login = async (req, res) =>{
    const { body }= req
    const { user, pass } = body
    // const passcrypt = await bcrypt.hash(pass, 8)
    conexion.query('SELECT user, pass WHERE user = ?',{user},(error,results)=>{
        if (error){
            throw error;
        }else{
            res.send(results)
        }
    });
}

module.exports = {
    login: login
}