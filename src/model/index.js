import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import config from '../config';

class Database {
  constructor() {
    this._sequelize = new Sequelize(config.database);
    this._models = {};

    const models = Object.assign(
      {},
      ...fs
        .readdirSync(__dirname)
        .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
        .map((file) => {
          const model = require(path.join(__dirname, file)).default;

          return {
            [model.name]: model.init(this._sequelize),
          };
        })
    );
    for (const model of Object.keys(models)) {
      typeof models[model].associate === 'function' &&
        models[model].associate(models);
    }
    this._models = models;
  }

  get sequelize() {
    return this._sequelize;
  }
  get models() {
    return this._models;
  }
}

const database = new Database();

export const models = database.models;
export const sequelize = database.sequelize;
