import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

class Server {
  constructor() {
    this._express = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(cors());
  }

  routes() {
    this.express.get('/ping', (req, res) => {
      res.status(200).end('pong');
    });
  }

  get express() {
    return this._express;
  }
}

const server = new Server();

export default server.express;
