import * as memberRepository from '@src/repository/memberRepository';
import * as googleApiCaller from '@src/externals/google/googleApiCaller';
import * as jwtUtils from '@src/utils/jwt';
import * as MemberProvider from '@src/type/MemberProvider';
import * as PasswordUtils from '@src/utils/password';
import * as memberServiceUtils from '@src/services/member/memberServiceUtils';
import { ValidationException } from '@src/exception/CustomException';
import { authResponse } from '@src/services/auth/dto/authResponse';

export const googleAuthService = async (code, redirectUri) => {
  const userInfo = await googleApiCaller.getGoogleUserProfile(
    code,
    redirectUri
  );

  const { email, name, picture } = userInfo.data;
  const findMember = await memberRepository.findMemberByEmailAndProvider(
    email,
    MemberProvider.GOOGLE
  );
  if (findMember == null) {
    // 해당 유저가 없을 경우, 회원가입을 위한 정보 반환한다.
    return authResponse('SIGN_UP', email, name, picture, null);
  }
  // 해당 유저가 있을 경우, 로그인을 진행한다.
  const token = jwtUtils.createToken(findMember.dataValues.id);
  return authResponse('LOGIN', null, null, null, token);
};

export const localAuthService = async (email, _password) => {
  const findMember = await memberServiceUtils.findMemberByEmailAndProvider(
    memberRepository,
    email,
    MemberProvider.LOCAL
  );
  _checkPassword(
    email,
    _password,
    findMember.dataValues.salt,
    findMember.dataValues.password
  );
  return jwtUtils.createToken(findMember.dataValues.id);
};

const _checkPassword = (email, _password, salt, memberPassword) => {
  const hashPassword = PasswordUtils.hashPassword(_password, salt);
  if (memberPassword !== hashPassword) {
    throw new ValidationException(
      '해당하는 이메일과 비밀번호를 가진 유저를 찾을 수 없습니다',
      email
    );
  }
};
