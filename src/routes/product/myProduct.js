import express from 'express';
import * as myproductController from './myProductController';
import { validateAuthToken } from '@src/middleware/authTokenValidator';

const router = express.Router();

router.get(
  '/api/v1/product/my',
  validateAuthToken,
  myproductController.retrieveMyProduct
);

router.get(
  '/api/v1/product/like/my',
  validateAuthToken,
  myproductController.retrieveMyLikeproducts
);

export default router;
