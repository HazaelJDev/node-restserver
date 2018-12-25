require('./config/config');
const express =  require('express');
const app =  express();
const bodyParser = require('body-parser');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application/json
app.use(bodyParser.json());

app.get('/usuario',(req,res) => {
    res.json('get Usuario');
});

app.post('/usuario',(req,res) => {
    let body = req.body;
    if(body.persona == undefined){
        res.status(400).json({
            ok: false,
            message: 'Es necesario el nombre'
        });
    }else{
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id',(req,res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario/:id',(req,res) => {
    res.json('delete Usuario');
});

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en puerto ${process.env.PORT}`);
})