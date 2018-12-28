require('./config/config');
const express =  require('express');
const app =  express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application/json
app.use(bodyParser.json());
//Rutas
app.use(require('./routes/usuario'));

//Conexion BD
mongoose.connect(process.env.URLDB,(err,res)=>{
    if(err) throw err;
    console.log('Base de dastos online');
});



app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en puerto ${process.env.PORT}`);
})