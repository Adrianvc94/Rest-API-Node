const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

// const routes = require('./routes');

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(
   'mongoose://localhost/Taller-Node',
   {
      useNewUrlParser:true,
      useUnifiedTopology:true
   }
);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(cors());

const port = 5000;

app.listen(port, () => {
   console.log('La aplicacion carre en la siguiente ruta http://localhosst:5000/')
})

// app.use('/', routes());