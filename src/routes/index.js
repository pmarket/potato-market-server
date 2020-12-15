import express from 'express';
import productRouter from '@src/routes/product';
import authRouter from '@src/routes/auth';
import memberRouter from '@src/routes/member';
import uploadRouter from '@src/routes/upload';
import myProductRouter from '@src/routes/product/myProduct';
import commentRouter from '@src/routes/comment';
import productLikeRouter from '@src/routes/productLike';

const router = express.Router();

router.use('/', [
  productRouter,
  authRouter,
  memberRouter,
  uploadRouter,
  myProductRouter,
  commentRouter,
  productLikeRouter,
]);

export default router;
