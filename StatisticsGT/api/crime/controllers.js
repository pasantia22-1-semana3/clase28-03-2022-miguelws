import {Crime, CrimeModel} from "./models.js";
import {response} from "../../response/response.js";

const crimeModel = new CrimeModel();

export class CrimeController {
  constructor() {}

  filter(req, res) {
    let key = req.params.key;
    let value = req.params.value;
    if (key === "type") {
      let list = crimeModel.filterByType(value);
      if (list) {
        response.succes(req, res, list, 200);
      }
    } else if (key === "year") {
      let list = crimeModel.filterByYear(value);
      if (list) {
        response.succes(req, res, list, 200);
      }
    } else if (key === "gender") {
      let list = crimeModel.filterByGender(value);
      if (list) {
        response.succes(req, res, list, 200);
      }
    } else {
      let messageNotFound = 'no existe la informacion';
      response.error(req, res, messageNotFound, 404);    }
  }
}