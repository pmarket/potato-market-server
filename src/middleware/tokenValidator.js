import * as jwtUtils from '../utils/jwt';
import { TokenExpiredException } from '../exception/customException';

export const validateAuthToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new TokenExpiredException();
    }
    const { memberId } = jwtUtils.decode(_removeBearer(token));
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
