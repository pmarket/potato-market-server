import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    port: process.env.PORT || '8000',
    env: process.env.ENV || 'development',
  },
  database: {
    local: {
      dialect: process.env.DB_DIALECT || 'mysql',
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  },
};

export default config;
