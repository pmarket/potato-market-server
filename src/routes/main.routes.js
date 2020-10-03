import express from 'express';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.status(200).end('pong');
});

export default router;
