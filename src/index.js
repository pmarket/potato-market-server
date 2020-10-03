import express from 'express';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import router from './routes/main.routes';

async function startServer() {
  const app = express();
  app.use('/', router);

  app.listen(8000, () => {
    console.log(`
        ################################################
        🛡️  Server listening on port: ${8000} 🛡️ 
        ################################################
        `);
  });
}
startServer();
