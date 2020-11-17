import { Op } from 'sequelize';
import Member from '@src/model/Member';

export const findMemberByEmailAndProvider = async (email, provider) => {
  return Member.findOne({
    where: {
      email: { [Op.eq]: email },
      provider: { [Op.eq]: provider },
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

export const saveMember = async ({ email, name, profileUrl, provider }) => {
  return await Member.create({
    email,
    name,
    profileUrl,
    provider,
  });
};
