import { logger } from '../config/winston';
import { ApiResponse } from '../common/CommonResponse';

export const handleCustomException = (err, req, res) => {
  logger.error(err);
  return res
    .status(err.status)
    .json(new ApiResponse(null, err.code, err.message));
};
