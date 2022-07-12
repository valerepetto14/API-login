const router = require('express').Router()
const conexion = require('./db')
const register = require('./controllers/register')
const jwt = require('jsonwebtoken')
const login = require('./controllers/login')

// router.post('/login', (req,res)=>{
//     user = req.body.user;
//     pass = req.body.pass;
//     if (user === "valentin" && pass === "1234"){
//         jwt.sign(id , 'secret_key' , (err,token) => {
//             if(err){
//                res.status(400).send({msg : 'Error'})
//             }
//             else{
//                res.send({msg:'success' , token: token})
//             }})
//     }else{
//         res.send("no sos vos")
//     }
// });
 
router.get('/usuarios', (req,res) => {
    conexion.query('SELECT * FROM usuarios',(error,results)=>{
        if (error){
            throw error;
        }else{
            res.send(results)
        }
    }); 
});

router.post('/register',register.regis)
router.post('/login',login.login)

module.exports = router;
