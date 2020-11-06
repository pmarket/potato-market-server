import { logger } from '@src/config/winston';
import { ApiResponse } from '@src/common/ApiResponse';

export const handleCustomException = (err, req, res) => {
  logger.error(err);
  return res
    .status(err.status)
    .json(new ApiResponse(null, err.code, err.message));
};
