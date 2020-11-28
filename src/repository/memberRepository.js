import { Op } from 'sequelize';
import Member from '@src/model/Member';
import * as MemberProvider from '@src/type/MemberProvider';

export const findMemberByEmailAndProvider = async (email, provider) => {
  return await Member.findOne({
    where: {
      email: { [Op.eq]: email },
      provider: { [Op.eq]: provider },
    },
  });
};

export const findMemberById = async (id) => {
  return await Member.findOne({
    where: {
      id: { [Op.eq]: id },
    },
  });
};

export const saveGoogleMember = async (email, name, profileUrl) => {
  return await Member.create({
    email,
    name,
    profileUrl,
    provider: MemberProvider.GOOGLE,
  });
};

export const saveLocalMember = async (email, name, password, salt) => {
  return await Member.create({
    email,
    name,
    password,
    salt,
    provider: MemberProvider.LOCAL,
  });
};
