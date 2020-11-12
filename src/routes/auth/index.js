import express from 'express';
import * as authController from '@src/routes/auth/authController';
import { validateRequestValues } from '@src/middleware/requestValidator';

const router = express.Router();

router.get(
  '/api/v1/auth/google',
  validateRequestValues('query', ['code', 'redirectUri']),
  authController.googleAuthController
);

export default router;
