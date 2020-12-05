import jwt from 'jsonwebtoken';
import config from '@src/config';
import { TokenExpiredException } from '@src/exception/CustomException';

export const decodeToken = (token) => {
  try {
    return jwt.verify(token, config.jwt.secretKey);
  } catch (err) {
    throw new TokenExpiredException(
      '토큰이 만료되었습니다. 다시 로그인 해 주세요.',
      err
    );
  }
};

export const createToken = (memberId) => {
  return jwt.sign(
    {
      memberId: memberId,
    },
    config.jwt.secretKey,
    {
      expiresIn: '60m',
      issuer: 'potato',
    }
  );
};
