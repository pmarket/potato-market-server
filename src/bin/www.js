import app from '../app';
import config from '../config';
import { sequelize } from '../model';

async function connectDatabase() {
  try {
    await sequelize.sync();
    console.log('Connection with the database is complete.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function startServer() {
  connectDatabase();
  app.listen(config.server.port, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${config.server.port} mode: ${config.server.env}🛡️
    ################################################
    `);
  });
}

startServer();
