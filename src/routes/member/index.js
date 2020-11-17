import express from 'express';
import * as memberController from '@src/routes/member/memberController';
import * as authTokenValidator from '@src/middleware/authTokenValidator';
import { validateRequestValues } from '@src/middleware/requestValidator';

const router = express.Router();

router.post(
  '/api/v1/signup/google',
  validateRequestValues('body', ['email', 'name']),
  memberController.signUpGoogleController
);

router.post(
  '/api/v1/signup/local',
  validateRequestValues('body', ['email', 'name', 'password']),
  memberController.signUpLocalController
);

router.get(
  '/api/v1/member',
  authTokenValidator.validateAuthToken,
  memberController.getMemberInfoController
);

export default router;
