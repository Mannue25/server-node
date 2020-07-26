
require('./config/config')
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// configuración global de rutas.

app.use(require ('./routes/index'));


// Mongo DB con mongoose
mongoose.connect(process.env.urlDB,
     {useNewUrlParser: true, useUnifiedTopology: true}, (req, res) => {

    if (res.err) throw  err;

    console.log('Base de datos ONLINE')
});

app.listen(process.env.PORT, () => {

    console.log(' Me estoy escuchando en el puerto 3000')
});