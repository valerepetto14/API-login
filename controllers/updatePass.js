const conexion = require('../db')
const bcrypt = require('bcrypt');
const key = require('../config').key
const jwt = require('jsonwebtoken')

const updatePass = (req, res) => {
    const user = req.user.name
    const pass = req.body.pass
    const newpass = req.body.newpass
    conexion.query("SELECT pass FROM usuarios WHERE ?",{user:user}, async (error, results)=>{
        const passBD = results[0].pass
        const compare = await bcrypt.compare(pass,passBD)
        if (!compare){
            res.status(401).json({
                state: "error",
                error: "contraseña equivocada"
            })
        }else{
            conexion.query('UPDATE usuarios SET ? WHERE ?',{pass:newpass ,user:user}, (error,results)=>{
                res.status(200).json({
                    state: "ok",
                    user: user
                })
            }) 
        }   
    })
}
module.exports = {
    updatePass: updatePass
}