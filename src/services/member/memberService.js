import * as memberRepository from '@src/repository/memberRepository';
import * as memberServiceUtils from './memberServiceUtils';
import * as jwtUtils from '@src/utils/jwt';
import * as PasswordUtils from '@src/utils/password';
import * as MemberProvider from '@src/type/MemberProvider';
import { memberInfoResponse } from './dto/memberInfoResponse';

export const signUpGoogleMember = async (email, name, profileUrl) => {
  await memberServiceUtils.validateNotExistMember(
    memberRepository,
    email,
    MemberProvider.GOOGLE
  );
  const newMember = await memberRepository.saveGoogleMember({
    email: email,
    name: name,
    profileUrl: profileUrl,
  });
  return jwtUtils.createToken(newMember.dataValues.id);
};

export const signUpLocalMember = async (email, name, password) => {
  await memberServiceUtils.validateNotExistMember(
    memberRepository,
    email,
    MemberProvider.LOCAL
  );
  const salt = PasswordUtils.makeSalt();
  const newMember = await memberRepository.saveLocalMember({
    email: email,
    name: name,
    password: PasswordUtils.hashPassword(password, salt),
    salt: salt,
  });
  return jwtUtils.createToken(newMember.dataValues.id);
};

export const getMemberInfo = async (memberId) => {
  const findMember = await memberRepository.findMemberById(memberId);
  return memberInfoResponse(findMember.dataValues);
};
