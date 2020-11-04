import { Op } from 'sequelize';
import Member from '../model/member';

export const findMemberByEmail = async (email) => {
  return Member.findOne({
    where: {
      email: { [Op.eq]: email },
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
