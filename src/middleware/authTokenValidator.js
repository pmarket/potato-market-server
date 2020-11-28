import * as jwtUtils from '@src/utils/jwt';
import { TokenExpiredException } from '@src/exception/CustomException';

export const validateAuthToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new TokenExpiredException();
    }
    const { memberId } = jwtUtils.decodeToken(_removeBearer(token));
    req.memberId = memberId;
    next();
  } catch (e) {
    next(e);
  }
};

const _removeBearer = (token) => {
  _validateToken(token);
  return token.split('Bearer ')[1];
};

const _validateToken = (token) => {
  if (!token) {
    throw new TokenExpiredException(
      '토큰이 만료되었습니다. 다시 로그인 해 주세요.',
      token
    );
  }
  if (!token.startsWith('Bearer')) {
    throw new TokenExpiredException(
      '토큰이 만료되었습니다. 다시 로그인 해 주세요.',
      token
    );
  }
};
