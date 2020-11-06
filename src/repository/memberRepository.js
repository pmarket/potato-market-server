import { Op } from 'sequelize';
import Member from '@src/model/Member';

export const findMemberByEmail = async (email) => {
  return Member.findOne({
    where: {
      email: { [Op.eq]: email },
    },
  });
};

export const findMemberById = async (id) => {
  return Member.findOne({
    where: {
      id: { [Op.eq]: id },
    },
  });
};

export const saveMember = async ({ email, name, profileUrl }) => {
  return await Member.create({
    email,
    name,
    profileUrl,
  });
};
