import * as memberRepository from '@src/repository/memberRepository';
import * as memberServiceUtils from './memberServiceUtils';
import * as jwtUtils from '@src/utils/jwt';
import * as MemberProvider from '@src/type/MemberProvider';
import { memberInfoResponse } from './dto/memberInfoResponse';

export const signUpGoogleMember = async (email, name, profileUrl) => {
  await memberServiceUtils.validateNotExistMember(
    memberRepository,
    email,
    MemberProvider.GOOGLE
  );
  const newMember = await memberRepository.saveMember({
    email: email,
    name: name,
    profileUrl: profileUrl,
    provider: MemberProvider.GOOGLE,
  });
  return jwtUtils.createToken(newMember.dataValues.id);
};

export const getMemberInfo = async (memberId) => {
  const findMember = await memberRepository.findMemberById(memberId);
  return memberInfoResponse(findMember.dataValues);
};
