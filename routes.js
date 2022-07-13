const router = require('express').Router()
const conexion = require('./db')
const register = require('./controllers/register')
const login = require('./controllers/login')
const updatePass = require('./controllers/updatePass')

router.get('/usuarios', (req,res) => {
    if (req.user.rol !== "admin"){
        res.status(401).json({error: "acceso denegado, no sos admin"})
    }else{
        conexion.query('SELECT * FROM usuarios',(error,results)=>{
            if (error){
                throw error;
            }else{
                res.send(results)
            }
        })
    }
    
});

router.get('/admin', (req, res)=>{
    const rol = req.user.rol
    if(rol !== "admin"){
        res.status(401).json({error: "acceso denegado, no sos admin"})
    }else{
    res.status(200).json({
        state: "ok",
        user: req.user
    })
    }
})

router.post('/register',register.regis)
router.post('/login',login.login)
router.post('updatepass', updatePass.updatePass)
module.exports = router;
