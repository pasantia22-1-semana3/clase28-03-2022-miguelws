import express from "express";
import cors from "cors"
import crimeRoute from "./crime/routes.js";

export class Server {
  constructor(hostName, port, nameApp) {
    this._hostname = hostName;
    this._port = port;
    this._name = nameApp;
    this._api = express();
    this.initMiddlewares();
    this.initRoutes();
  }

  initMiddlewares() {
    this._api.use(express.json());
    this._api.use(express.urlencoded({extended: true}));
    this._api.use(cors());
  }

  initRoutes() {
    this._api.use("/api/statistic", crimeRoute);
    this._api.use("/home", (req, res)=>{
      res.json({message: "Bienvenido"});
    });
    this._api.use("*", (req, res) => {
      res.json({message: "404: No encontrado"});
    });
  }

  initServer() {
    try {
      this._api.set('trust proxy', this._hostname);
      this._api.listen(this._port, () => {
        console.log(`server of ${this._name} running at http://${this._hostname}: ${this._port}`);
      });
    } catch (error) {
      console.log(`Error al iniciar el servidor detalle: ${error}`);
    }
  }
}
