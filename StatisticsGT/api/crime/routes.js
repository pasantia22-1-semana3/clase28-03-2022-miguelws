import express from "express";
import {CrimeController} from "./controllers.js";

const crimeController = new CrimeController;
const crimeRoute = express.Router();

crimeRoute.get("/:key/:value", crimeController.filter);

export default crimeRoute;