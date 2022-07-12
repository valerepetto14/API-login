const conexion = require('../db')
const bcrypt = require('bcrypt');
const key = require('../config').key
const jwt = require('jsonwebtoken')

const login = async (req, res) =>{
    let { body }= req
    let { user, pass } = body
    // const passcrypt = await bcrypt.hash(pass, 8)
    conexion.query('SELECT id, user, pass FROM usuarios WHERE ?',{user:user},async (error,results)=>{
        if (error){
            throw error;
        }else{
            // const data = JSON.parse(results)
            if(results.length == 0){
                res.send("ese usuario no esta registrado")
            }else{
                let passBD = results[0].pass
                let compare = await bcrypt.compare(pass, passBD);
                if (!compare){
                    res.json({
                        state:"contraseña o usuario equivocado",
                        data:[]
                    })
                }else{
                    token = jwt.sign({
                        id: results[0].id,
                        name:user
                    }, key)
                    res.json({
                        state:"entraste",
                        data:user,
                        token:token
                    })
                }
            }
        }
    });
}

module.exports = {
    login: login
}
