const router = require('express').Router()
const conexion = require('./db')
const register = require('./controllers/register')
const login = require('./controllers/login')
const verifytoken = require('./middleware/verifytoken')



router.use('/admin', verifytoken);

router.get('/usuarios', (req,res) => {
    conexion.query('SELECT * FROM usuarios',(error,results)=>{
        if (error){
            throw error;
        }else{
            res.send(results)
        }
    }); 
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

module.exports = router;
