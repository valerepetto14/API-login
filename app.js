const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./routes')
const verifytoken = require('./middleware/verifytoken')

app.set('view engine','ejs');

//middlewares
app.use('/api/', verifytoken);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())
app.use('/', router)


app.get('/', (req,res) => {
    res.render('index')
});

app.listen(3000, () =>{
    console.log("andandooo")
});
 
