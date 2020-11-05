import app from '../app';
import config from '../config';
import { sequelize } from '../model';
import { logger } from '../config/winston';

async function connectDatabase() {
  try {
    await sequelize.sync();
  } catch (error) {
    logger.error(`fail to connect to database error: ${error}`);
  }
}

function startServer() {
  app.listen(config.server.port, async () => {
    await connectDatabase();
    logger.info(`
  ################################################
  🛡️  Server listening on port: ${config.server.port} - ${config.server.env}
  ################################################
  `);
  });
}

startServer();
