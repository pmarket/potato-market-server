import { ValidationException } from '@src/exception/CustomException';

export const validateRequestValues = (field, params) => {
  return function (req, res, next) {
    try {
      for (const param in params) {
        if (!(params[param] in req[field])) {
          throw new ValidationException(params[param] + '을 입력해 주세요');
        }
      }
    } catch (err) {
      next(err);
    }
    next();
  };
};
