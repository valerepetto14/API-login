const conexion = require('../db')
const bcrypt = require('bcrypt');

const login = async (req, res) =>{
    let { body }= req
    let { user, pass } = body
    // const passcrypt = await bcrypt.hash(pass, 8)
    conexion.query('SELECT user, pass FROM usuarios WHERE ?',{user:user},(error,results)=>{
        if (error){
            throw error;
        }else{
            // const data = JSON.parse(results)
            if(results.length){
                res.send("no estas registrado/a")
            }else{
                let passBD = result[0].pass
                let compare = bcrypt.compare(pass,passBD)
                if (compare){
                    res.send("Acceso exitoso")
                }else{
                    res.send("Una de tus credenciales fallo")
                }
            }
        }
    });
}

module.exports = {
    login: login
}
