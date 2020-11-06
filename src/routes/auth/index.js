import express from 'express';
import * as authController from '@src/routes/auth/authController';

const router = express.Router();

router.get('/api/v1/auth/google', authController.googleAuthController);

export default router;
