import express from 'express';
import * as memberController from './memberController';
import * as authTokenValidator from '../../middleware/authTokenValidator';

const router = express.Router();

router.post('/api/v1/member', memberController.signUpController);

router.get(
  '/api/v1/member',
  authTokenValidator.validateAuthToken,
  memberController.getMemberInfoController
);

export default router;
