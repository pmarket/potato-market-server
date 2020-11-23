import { ApiResponse } from '@src/ApiResponse';
import { logger } from '@src/config/winston';

export const handleNotFoundException = (req, res, next) => {
  return res
    .status(404)
    .json(new ApiResponse(null, 'NOT_FOUND_EXCEPTION', 'NOT_FOUND_EXCEPTION'));
};

export const handleCustomException = (err, req, res, next) => {
  if (!err.status) {
    logger.error(err.message);
    return res
      .status(500)
      .json(
        new ApiResponse(
          null,
          'INTERNAL_EXCEPTION',
          '비정상적인 에러가 발생하였습니다'
        )
      );
  }
  logger.error(err);
  return res
    .status(err.status || 500)
    .json(new ApiResponse(null, err.code, err.message));
};
