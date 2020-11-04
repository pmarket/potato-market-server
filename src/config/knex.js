import knex from 'knex';
import config from './index';

const db = knex({
  client: config.database.dialect,
  connection: {
    host: config.database.host,
    user: config.database.username,
    database: config.database.database,
    password: config.database.password,
  },
});

export default db;
