import express from 'express';
import * as controller from './memberController';

const router = express.Router();

router.post('/member', controller.save);

export default router;
