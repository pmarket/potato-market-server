import * as memberRepository from '../../repository/memberRepository';
import * as memberServiceUtils from './memberServiceUtils';
import * as jwtUtils from '../../utils/jwt';
import { memberInfoResponse } from './dto/memberInfoResponse';

export const signUpMember = async (email, name, profileUrl) => {
  await memberServiceUtils.validateNotExistMember(memberRepository, email);
  const newMember = await memberRepository.saveMember({
    email: email,
    name: name,
    profileUrl: profileUrl,
  });
  return jwtUtils.createToken(newMember.dataValues.id);
};

export const getMemberInfo = async (memberId) => {
  const findMember = await memberRepository.findMemberById(memberId);
  return memberInfoResponse(findMember.dataValues);
};
