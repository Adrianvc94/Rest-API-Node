const Articulos = require('../models/Articulos');


exports.getAll = async (req, res, next) => {
   try {
      const articulos = await Articulos.find();
      res.json(articulos);
   } catch (error) {
      console.log("exports.getAll: ", error);
      res.json({
         Error: error
      });
      next();
   }
}

exports.getID = async (req, res) => {
   try {
      const id = req.params.id;
      const articulo = await Articulos.findById(id);
      if(!articulo){
         res.status(404).json({
            mensaje:'El articulo no existe'
        })
      }
      res.json(articulo);
   } catch (error) {
      console.log("exports.getID: ", error);
      res.json({
         Error: error
      });
      next();
   }
}

exports.add = async (req, res) => {
   const articulo = new Articulos(req.body);
   try {
      await articulo.save();
      res.json({
         mensaje:'El articulo se agrego correctamente'
      })
   } catch (error) {
      console.log("exports.add: ", error);
      res.json({
         Error: error
      });
      next();
   }
}

exports.update = async (req, res) => {
   try {
      const id = req.params.id;
      const articulo = await Articulos.findOneAndUpdate(
         {_id:id},
         req.body,
         {new:true});
         res.json({
            mensaje:'Se actualizo el articulo con exito'
         })
   } catch (error) {
      console.log("exports.update: ", error);
      res.json({
         Error: error
      });
      next();
   }
}

exports.delete = async (req, res) => {
   try {
      const id = req.params.id;
      const articulo = await Articulos.findOneAndRemove({_id:id})
      res.json({
         mensaje: 'Se elimino el articulo con exito'
      })
   } catch (error) {
      console.log("exports.update: ", error);
      res.json({
         Error: error
      });
      next();
   }
}