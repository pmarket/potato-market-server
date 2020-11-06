import express from 'express';
import boardRouter from '@src/routes/board';
import authRouter from '@src/routes/auth';
import memberRouter from '@src/routes/member';

const router = express.Router();

router.use('/', boardRouter);
router.use('/', authRouter);
router.use('/', memberRouter);

export default router;
