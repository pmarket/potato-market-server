import express from 'express';
import * as memberController from '@src/routes/member/memberController';
import * as authTokenValidator from '@src/middleware/authTokenValidator';
import { validateRequestValues } from '@src/middleware/requestValidator';

const router = express.Router();

router.post(
  '/api/v1/member',
  validateRequestValues('body', ['email', 'name']),
  memberController.signUpGoogleController
);

router.get(
  '/api/v1/member',
  authTokenValidator.validateAuthToken,
  memberController.getMemberInfoController
);

export default router;
