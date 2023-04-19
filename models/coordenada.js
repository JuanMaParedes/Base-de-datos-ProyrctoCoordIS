const { Schema, model } = require("mongoose");

const CoordSchema= Schema({
    latitud:{
        type: String,
    },
    longitud:{
        type: String,
    },
    
    usuario:{
        type: String,
    },


});


module.exports= model("Coordenada",CoordSchema);