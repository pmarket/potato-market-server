import express from 'express';
import * as authController from './authController';

const router = express.Router();

router.get('/api/v1/auth/google', authController.googleAuthController);

export default router;
