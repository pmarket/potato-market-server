import express from 'express';
import { signUpController } from './memberController';

const router = express.Router();

router.post('/api/v1/member', signUpController);

export default router;
