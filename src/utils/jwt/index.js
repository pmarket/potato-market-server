import jwt from 'jsonwebtoken';
import config from '../../config';
import { TokenExpiredException } from '../../exception/customException';

export const decode = (token) => {
  try {
    return jwt.verify(token, config.jwt.secretKey);
  } catch (err) {
    throw new TokenExpiredException('토큰이 만료 되었습니다', err);
  }
};

export const createToken = (memberId) => {
  return jwt.sign(
    {
      memberId: memberId,
    },
    config.jwt.secretKey,
    {
      expiresIn: '30m',
      issuer: 'potato',
    }
  );
};
