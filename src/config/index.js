import dotenv from 'dotenv';
import path from 'path';
import { logger } from '@src/config/winston';

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

const config = {
  server: {
    port: process.env.PORT || '8000',
    env: process.env.NODE_ENV,
  },
  database: {
    dialect: process.env.DB_DIALECT || 'mysql',
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    logging: (msg) => logger.info(msg),
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  google: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    grant_type: process.env.GOOGLE_GRANT_TYPE,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
  },
  jwt: {
    secretKey: process.env.SECRET_KEY,
  },
};

export default config;
