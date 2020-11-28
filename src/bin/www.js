import app from '@src/app';
import config from '@src/config';
import { sequelize } from '@src/model';
import { logger } from '@src/config/winston';

async function connectDatabase() {
  try {
    const options = {
      force: process.env.NODE_ENV === 'test' ? true : false,
    };
    await sequelize.sync(options);
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
