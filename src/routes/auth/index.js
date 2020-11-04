import express from 'express';
import { googleAuthService } from '../../services/auth/authService';
const router = express.Router();

router.get('/api/v1/auth/google', async (req, res) => {
  const code = req.query.code;
  const response = await googleAuthService(code);
  res.status(200).send(response);
});

export default router;
