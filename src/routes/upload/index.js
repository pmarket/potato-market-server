import express from 'express';
import { logger } from '@src/config/winston';
import upload from '@src/externals/s3/s3';
import { ApiResponse } from '@src/ApiResponse';

const router = express.Router();

router.post('/api/v1/upload', upload.single('file'), (req, res, next) => {
  try {
    logger.info(`파일이 업로드 되었습니다. ${req.file}`);
    res.status(200).send(new ApiResponse({ url: req.file.location }));
  } catch (err) {
    next(err);
  }
});

export default router;
