import express from 'express';
import memberRouter from './member/memberRouter';

const router = express.Router();

router.use('/', memberRouter);

export default router;
