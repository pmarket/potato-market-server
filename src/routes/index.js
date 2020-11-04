import express from 'express';
import boardRouter from './board';
import authRouter from './auth';
import memberRouter from './member';

const router = express.Router();

router.use('/', boardRouter);
router.use('/', authRouter);
router.use('/', memberRouter);

export default router;
