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
            if(results.length == 0){
                res.send("no estas registrado/a")
            }else{
                let passBD = results[0].pass
                if (bcrypt.compare(pass,passBD)){
                    res.send(compare)
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
