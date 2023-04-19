const express = require("express");
const cors = require("cors");
const {dbConnection} = require('../database/config')


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.coordPath = "/api/coordenadas"; 
    //conexion DB
    this.conectarDB();
    //Middlewares
    this.middlewares();
    //Rutas
    this.routes();
  }
  
  async conectarDB(){
    await dbConnection();

}

  middlewares() {
    //CORS
    this.app.use(cors());

    //lectura y parseo del body
    this.app.use(express.json());

    //directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.coordPath, require("../routes/coordenadas"));
  
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
