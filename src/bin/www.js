import app from '../app';

async function startServer() {
  app.listen(8000, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${8000}
    ################################################
    `);
  });
}

startServer();
