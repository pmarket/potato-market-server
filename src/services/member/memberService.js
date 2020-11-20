import * as memberRepository from '@src/repository/memberRepository';
import * as MemberServiceUtils from './memberServiceUtils';
import * as JwtUtils from '@src/utils/jwt';
import * as PasswordUtils from '@src/utils/password';
import * as MemberProvider from '@src/type/MemberProvider';
import { memberInfoResponse } from './dto/memberInfoResponse';

export const signUpGoogleMember = async (email, name, profileUrl) => {
  await MemberServiceUtils.validateNotExistMember(
    memberRepository,
    email,
    MemberProvider.GOOGLE
  );
  const newMember = await memberRepository.saveGoogleMember({
    email: email,
    name: name,
    profileUrl: profileUrl,
  });
  return JwtUtils.createToken(newMember.dataValues.id);
};

export const signUpLocalMember = async (email, name, password) => {
  await MemberServiceUtils.validateNotExistMember(
    memberRepository,
    email,
    MemberProvider.LOCAL
  );
  const salt = PasswordUtils.createSalt();
  const newMember = await memberRepository.saveLocalMember({
    email: email,
    name: name,
    password: PasswordUtils.encryptPassword(password, salt),
    salt: salt,
  });
  return JwtUtils.createToken(newMember.dataValues.id);
};

export const getMemberInfo = async (memberId) => {
  const findMember = await memberRepository.findMemberById(memberId);
  return memberInfoResponse(findMember.dataValues);
};

export const updateMemberInfo = async (memberId, name, profileUrl) => {
  const findMember = await memberRepository.findMemberById(memberId);
  findMember.update({ name: name, profileUrl: profileUrl });
};
