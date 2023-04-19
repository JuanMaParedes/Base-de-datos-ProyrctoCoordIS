const { response, request } = require("express");
const Coord= require('../models/coordenada');

const coordenadasGet = async(req=request, res=resolve) => {
  const { latitud, longitud, usuario} = req.query;
  const coord=await Coord.find();

  res.json({
    coord,
    msg: "Get api - controlador",
  
  });
};

// Crear un posteo
const coordenadasPost=async(req= request, res= response)=>{
  const {latitud, longitud, usuario}= req.body;
  const coord= new Coord({latitud, longitud, usuario});
  coord.save()
  .then(resultado => {
    console.log('Documento guardado correctamente:', resultado);
  })
  .catch(error => {
    console.log('Error al guardar el documento:', error);
  });
  res.status(201).json({
      coord,
      msg: "coordenada subida",
  });
 
}


const coordenadasPut = async (req = request, res = response) => {
  const {id}= req.params;
    const {latitud, longitud, usuario}= req.body;
    const datos= {
      latitud,
      longitud,
      usuario
    }
    const coord= await Coord.findByIdAndUpdate(id, datos,{new:true})
    res.json({
        msg: "BLog Actualizado",
        coord,
    });
};

const coordenadasDelete = async (req, res = response) => {
  const {id}= req.params;
  const coordBorrado= await Coord.findByIdAndDelete(id);
  res.json({
      msg: "Coordenada Borrada",
      coordBorrado,
  });
};

module.exports = {
  coordenadasGet,
  coordenadasPost,
  coordenadasPut,
  coordenadasDelete,
};
