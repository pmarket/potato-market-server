import * as memberRepository from '../../repository/memberRepository';
import * as memberServiceUtils from './memberServiceUtils';
import * as jwtUtils from '../../utils/jwt';

export const signUpMember = async (email, name, profileUrl) => {
  await memberServiceUtils.validateNotExistMember(memberRepository, email);
  const newMember = await memberRepository.saveMember({
    email: email,
    name: name,
    profileUrl: profileUrl,
  });
  const token = jwtUtils.createToken(newMember.dataValues.id);
  return token;
};
