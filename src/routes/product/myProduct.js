import express from 'express';
import * as myproductController from './myProductController';
import { validateAuthToken } from '@src/middleware/authTokenValidator';

const router = express.Router();

router.get(
  '/api/v1/product/my',
  validateAuthToken,
  myproductController.retrieveMyProduct
);

export default router;
