import express from 'express';
import * as memberController from './memberController';
import { validateAuthToken } from '../../middleware/tokenValidator';

const router = express.Router();

router.post('/api/v1/member', memberController.signUpController);

router.get(
  '/api/v1/member',
  validateAuthToken,
  memberController.getMemberInfoController
);

export default router;
