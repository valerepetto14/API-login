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
                console.log(pass)
                console.log(passBD)
                let compare = auth(pass, passBD)
                if (compare){
                    res.send(compare)
                }else{
                    res.send("Una de tus credenciales fallo")
                }
            }
        }
    });
}

const auth = async (pass, passE){
    let compare = await bcrypt.compare(pass, passE);
    return (compare);
}

module.exports = {
    login: login
}
