import express from 'express';
import boardRouter from './board';
import authRouter from './auth';

const router = express.Router();

router.use('/', boardRouter);
router.use('/', authRouter);

export default router;
