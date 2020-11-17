import crypto from 'crypto';

export const makeSalt = () => {
  return Math.round(new Date().valueOf() * Math.random()) + '';
};

export const hashPassword = (password, salt) => {
  return crypto
    .createHash('sha512')
    .update(password + salt)
    .digest('hex');
};
