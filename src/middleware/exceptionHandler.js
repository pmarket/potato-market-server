import { logger } from '../config/winston';
import { ApiResponse } from '../common/apiResponse';

export const handleCustomException = (err, req, res, next) => {
  logger.error(`${err.message} ${err.data}`);
  return res
    .status(err.status)
    .json(new ApiResponse(null, err.code, err.message));
};
