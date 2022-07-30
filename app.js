const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./routes/routes')
const verifytoken = require('./middleware/verifytoken')
const cookieParser = require('cookie-parser')
require('dotenv').config({path: './.env'})
const port = process.env.PORT

//middlewares
app.use(cookieParser())
app.use('/', verifytoken);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())
app.use('/', router)


app.get('/', (req,res) => {
    res.render('index')
});

app.listen(port, () =>{
    console.log("andando")
});
 
