import fs from "fs";

export class Crime {
  constructor(type, gender, year, total, status) {
    this._id = 0,
    this._type = type;
    this._gender = gender;
    this._year = year;
    this._total = total;
    this._status = status;
  }

  get id() {
    return this._id;
  }
  get type() {
    return this._type;
  }
  get gender() {
    return this._gender;
  }
  get year() {
    return this._year;
  }
  get total() {
    return this._total;
  }
  get status() {
    return this._status;
  }
  
  set id(id) {
    return this._id = id;
  }
  set type(type) {
    return this._type = type;
  }
  set gender(gender) {
    return this._gender = gender;
  }
  set year(year) {
    return this._year = year;
  }
  set total(total) {
    return this._total = total;
  }
  set status(status) {
    return this._status = status;
  }
}

export class CrimeModel {
  constructor() {
    this._name = 'db';
    this._dataDir = 'db';
    this._dataPath = 'db/db.json';
  }

  readJsonFile() {
    let contentFile = fs.readFileSync(this._dataPath, 'utf-8');
    if (contentFile) {
      return JSON.parse(contentFile);
    }
    return [];
  }

  writeJsonFile(data) {
    let jsonData = JSON.stringify(data, null, '');
    fs.writeFileSync(this._dataPath, jsonData);
  }

  filterByType(type) {
    let items = this.readJsonFile();
    return items.filter((items) => items._type.toLowerCase() === type);
  }

  filterByYear(year) {
    let items = this.readJsonFile();
    return items.filter((items) => items._year === year);
  }

  filterByGender(gender) {
    let items = this.readJsonFile();
    return items.filter((items) => items._gender.toLowerCase() === gender);
  }
}