const router = require('express').Router()
const conexion = require('./db')
const users = require('./controllers/users')
const tasks = require('./controllers/Tasks')

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

router.get('/api/tasks', (req, res) =>{
    const rol = req.user.rol
    if(rol !== "admin"){
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

router.post('/register', users.register)
router.post('/login',users.login)
router.post('/api/updatepass', users.updatePass)
router.post('/api/addtasks',tasks.addTasks)
module.exports = router;
