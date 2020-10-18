import app from '../app';
import config from '../config';
import { sequelize } from '../model';

sequelize
  .sync({})
  .then(() => {
    app.listen(config.server.port, () => {
      console.log(`
    ################################################
    🛡️  Server listening on port: ${config.server.port}🛡️
    ################################################
    `);
    });
  })
  .catch((error) => {
    console.log(`database error: ${error}`);
  });
