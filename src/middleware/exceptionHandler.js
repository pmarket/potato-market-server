import { ApiResponse } from '@src/ApiResponse';
import { logger } from '@src/config/winston';

export const handleNotFoundException = (req, res, next) => {
  return res
    .status(404)
    .json(new ApiResponse(null, 'NOT_FOUND_EXCEPTION', 'NOT_FOUND_EXCEPTION'));
};

export const handleCustomException = (err, req, res, next) => {
  logger.error(err);
  return res
    .status(err.status)
    .json(new ApiResponse(null, err.code, err.message));
};
