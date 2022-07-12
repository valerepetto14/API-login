const jwt = require('jsonwebtoken')
const key = require('../config').key

const verifytoken = (req,res,next) =>{
    const token = req.header('auth-token')
    if (!token){
        return res.status(401).json({error: "acceso denegado"})
    }
    try {
        const verificar = jwt.verify(token, key)
        console.log(verificar.rol)
        req.user = verificar
        next()
    } catch (error) {
        return res.status(401).json({error: "acceso denegado, token no es valido"})
    }
}

module.exports = authtoken;