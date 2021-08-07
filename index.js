const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(
   'mongodb://localhost/Taller-Node',
   {
      useNewUrlParser:true,
      useUnifiedTopology:true
   }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

const port = 5000;

app.listen(port,() => {
   console.log('La aplicacion corre en la siguente ruta http://localhost:5000/')
})

app.use('/',routes());