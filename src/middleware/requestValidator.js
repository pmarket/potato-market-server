import { ValidationException } from '@src/exception/CustomException';

export const validateRequestValues = (field, params) => {
  return function (req, res, next) {
    try {
      for (const param in params) {
        if (!(params[param] in req[field])) {
          throw new ValidationException(params[param] + '을 입력해 주세요');
        }
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

export const validateEmailRegex = () => {
  return (req, res, next) => {
    try {
      const { email } = req.body;
      const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (regExp.test(email) == false) {
        throw new ValidationException('이메일 형식이 아닙니다', email);
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

export const validatePasswordRegex = () => {
  return (req, res, next) => {
    try {
      const { password } = req.body;
      const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}/;
      if (regex.test(password) == false) {
        throw new ValidationException('비밀번호 규칙에 어긋납니다');
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
