import crypto from 'crypto';
import { NotFoundException } from '@src/exception/CustomException';

export const createSalt = () => {
  return Math.round(new Date().valueOf() * Math.random()) + '';
};

export const encryptPassword = (_password, salt) => {
  return crypto
    .createHash('sha512')
    .update(_password + salt)
    .digest('hex');
};

export const checkPassword = (email, _password, salt, memberPassword) => {
  const hashPassword = encryptPassword(_password, salt);
  if (memberPassword !== hashPassword) {
    throw new NotFoundException(
      '해당하는 이메일과 비밀번호를 가진 유저를 찾을 수 없습니다',
      email
    );
  }
};
