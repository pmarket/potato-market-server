import express from 'express';
import { validateAuthToken } from '@src/middleware/authTokenValidator';
import { validateRequestValues } from '@src/middleware/requestValidator';
import * as commentController from '@src/routes/comment/commentController';

const router = express.Router();

router.post(
  '/api/v1/product/comment',
  validateRequestValues('body', ['productId', 'content']),
  validateAuthToken,
  commentController.addNewComment
);

router.get(
  '/api/v1/product/comment',
  validateAuthToken,
  validateRequestValues('query', ['productId']),
  commentController.retrieveProductComment
);

export default router;
