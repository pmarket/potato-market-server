import app from '../app';
import config from '../config';
import { sequelize } from '../model';
import { logger } from '../config/winston';

async function connectDatabase() {
  try {
    await sequelize.sync();
    logger.info('Connection with the database is complete.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
}

async function startServer() {
  connectDatabase();
  app.listen(config.server.port, () => {
    logger.info(`
    ################################################
    🛡️  Server listening on port: ${config.server.port} mode: ${config.server.env}🛡️
    ################################################
    `);
  });
}

startServer();
