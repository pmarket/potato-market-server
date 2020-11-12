import { ApiResponse } from '@src/ApiResponse';
import { logger } from '@src/config/winston';

export const uploadS3 = (req, res, next) => {
  try {
    logger.info(`파일이 업로드 되었습니다. ${req.file}`);
    res.status(200).send(new ApiResponse(req.file.location));
  } catch (err) {
    next(err);
  }
};
