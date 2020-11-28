import express from 'express';
import upload from '@src/externals/s3/s3';

import * as UploadController from './uploadController';

const router = express.Router();

router.post('/api/v1/upload', upload.single('file'), UploadController.uploadS3);

export default router;
