const router = require('express').Router()
const conexion = require('./db')
const register = require('./controllers/register')
const login = require('./controllers/login')
const updatePass = require('./controllers/updatePass')
const addTasks = require('./controllers/addTasks')

router.get('/api/usuarios', (req,res) => {
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

router.get('/api/admin', (req, res)=>{
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

router.get('/tasks', (req, res) =>{
    const rol = req.user.rol
    if(rol !== "admim"){
        res.status(401).json({error: "acceso denegado, no sos admin"})
    }else{
        conexion.query('SELECT * FROM tasks;', (error,results)=>{
            if (error){
                throw error;
            }else{
                res.json(results)
            }
        })
    }
});

router.post('/register',register.regis)
router.post('/login',login.login)
router.post('/api/updatepass', updatePass.updatePass)
router.post('/api/addtasks',addTasks.addTasks)
module.exports = router;
