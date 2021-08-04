const express = require('express');
const router = express.Router();
const articuloController = require('../controllers/articuloControllers');

module.exports = function() {
   
   // Articulos
   router.get('/articulos', articuloController.getAll)
   router.get('/articulos/:id', articuloController.getID)
   router.post('/articulos', articuloController.add)
   router.put('/articulos/:id', articuloController.update)
   router.delete('/articulos/:id', articuloController.delete)
   
   return router;  
}