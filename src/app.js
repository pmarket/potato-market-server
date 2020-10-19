import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes';

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

    this.express.use('/api/v1', router);

    // TODO: Error Handler (모듈화 시키기)
    this.express.use((err, req, res, next) => {
      return res.status(err.code || 500).json({
        message: err.message,
      });
    });
  }

  get express() {
    return this._express;
  }
}

const server = new Server();

export default server.express;
