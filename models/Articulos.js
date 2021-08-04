const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articulosSchema = new Schema({
   titulo: {
      type:String,
      trim:true
   },
   autores:[
      { 
         type:String,
         trim:true 
      }
   ],
   palabras_claves: [
      { 
         type:String,
         trim:true 
      }
   ],
   correo_electronico: {
      type:String,
      trim:true
   },
   cuenta_con_copia: {
      type:Boolean
   },
   donde_se_guarda:{ 
      type:String,
      trim:true 
   }
   ,
   informe_tecnico: [
      {
         numero:{ 
            type:String,
            trim:true 
         },
         centro_publicado:{
            type:String,
            trim:true 
         },
         fecha_publicacion:{
            type:Date
         }
      }
   ],
   acta_congreso: [
      {
         nombre_congreso:{ 
            type:String,
            trim:true 
         },
         edicion:{
            type:String,
            trim:true 
         },
         ciudad:{
            type:String,
            trim:true 
         },
         fecha_inicio:{ 
            type:Date
         },
         fecha_finalizacion:{
            type:Date
         },
         pais:{
            type:String,
            trim:true 
         },
         primer_anno:{
            type:String,
            trim:true 
         }
      }
   ],
   revista_cientifica: [
      {
         nombre_revista:{ 
            type:String,
            trim:true 
         },
         nombre_editor:{
            type:String,
            trim:true 
         },
         anno_empezo_publicacion:{
            type:String,
            trim:true 
         },
         frecuencia:{ 
            type:String,
            trim:true 
         },
         temas:{
            type:String,
            trim:true 
         },
         numero_revista:{
            type:String,
            trim:true 
         },
         pagina_ocupada:{
            type:String,
            trim:true 
         },
         anno:{
            type:String,
            trim:true 
         }
      }
   ],
   autor_articulo: [
      {
         centro:{
            type:String,
            trim:true 
         },
         email:{
            type:String,
            trim:true 
         },
         temas_trabaja:{
            type:String,
            trim:true 
         }
      }
   ]
})


module.exports = mongoose.model('Articulo', articulosSchema);