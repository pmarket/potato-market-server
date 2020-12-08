import express from 'express';
import * as productLikeController from '@src/routes/productLike/productLikeController';
import { validateAuthToken } from '@src/middleware/authTokenValidator';
import { validateRequestValues } from '@src/middleware/requestValidator';

const router = express.Router();

router.post(
  '/api/v1/product/like',
  validateRequestValues('body', ['productId']),
  validateAuthToken,
  productLikeController.addProductLike
);

router.delete(
  '/api/v1/product/like',
  validateRequestValues('query', ['productId']),
  validateAuthToken,
  productLikeController.deleteProductLike
);

export default router;
