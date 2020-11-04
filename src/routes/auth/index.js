import express from 'express';
import { googleAuthController } from './authController';

const router = express.Router();

router.get('/api/v1/auth/google', googleAuthController);

export default router;
