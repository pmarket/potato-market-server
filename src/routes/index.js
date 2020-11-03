import express from 'express';
import boardRouter from './board';

const router = express.Router();

router.use('/', boardRouter);

export default router;
