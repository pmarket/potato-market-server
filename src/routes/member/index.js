import express from 'express';
import * as memberController from '@src/routes/member/memberController';
import { validateAuthToken } from '@src/middleware/authTokenValidator';
import {
  validateRequestValues,
  validateEmailRegex,
  validatePasswordRegex,
} from '@src/middleware/requestValidator';

const router = express.Router();

router.post(
  '/api/v1/signup/google',
  validateRequestValues('body', ['email', 'name']),
  validateEmailRegex(),
  memberController.signUpGoogleController
);

router.post(
  '/api/v1/signup/local',
  validateRequestValues('body', ['email', 'name', 'password']),
  validateEmailRegex(),
  validatePasswordRegex(),
  memberController.signUpLocalController
);

router.get(
  '/api/v1/member',
  validateAuthToken,
  memberController.getMemberInfoController
);

router.put(
  '/api/v1/member',
  validateRequestValues('body', ['name', 'profileUrl']),
  validateAuthToken,
  memberController.updateMemberInfoController
);

export default router;
