import express from 'express';
import productRouter from '@src/routes/product';
import authRouter from '@src/routes/auth';
import memberRouter from '@src/routes/member';
import uploadRouter from '@src/routes/upload';
import myProductRouter from '@src/routes/product/myProduct';
import commentRotuer from '@src/routes/comment';

const router = express.Router();

router.use('/', productRouter);
router.use('/', authRouter);
router.use('/', memberRouter);
router.use('/', uploadRouter);
router.use('/', myProductRouter);
router.use('/', commentRotuer);

export default router;
