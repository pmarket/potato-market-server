import express from 'express';
import * as productLikeController from '@src/routes/productLike/productLikeController';
import { validateAuthToken } from '@src/middleware/authTokenValidator';
import { validateRequestValues } from '@src/middleware/requestValidator';

const router = express.Router();

router.put(
  '/api/v1/product/like',
  validateRequestValues('body', ['productId']),
  validateAuthToken,
  productLikeController.toggleProductLike
);
export default router;
