import { ApiResponse } from '@src/ApiResponse';
import { logger } from '@src/config/winston';
import { ValidationException } from '@src/exception/CustomException';

export const uploadS3 = (req, res, next) => {
  try {
    if (!req.file) {
      throw new ValidationException('업로드 할 파일이 존재하지 않습니다');
    }
    logger.info(`파일이 업로드 되었습니다. ${req.file}`);
    res.status(200).send(new ApiResponse(req.file.location));
  } catch (err) {
    next(err);
  }
};
