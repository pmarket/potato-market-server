import express from 'express';
import boardRouter from '@src/routes/board';
import authRouter from '@src/routes/auth';
import memberRouter from '@src/routes/member';
import uploadRouter from '@src/routes/upload';

const router = express.Router();

router.use('/', boardRouter);
router.use('/', authRouter);
router.use('/', memberRouter);
router.use('/', uploadRouter);

export default router;
