import * as memberRepository from '@src/repository/memberRepository';
import * as googleApiCaller from '@src/externals/google/googleApiCaller';
import * as JwtUtils from '@src/utils/jwt';
import * as MemberProvider from '@src/type/MemberProvider';
import * as PasswordUtils from '@src/utils/password';
import * as MemberServiceUtils from '@src/services/member/memberServiceUtils';
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
  const token = JwtUtils.createToken(findMember.dataValues.id);
  return authResponse('LOGIN', null, null, null, token);
};

export const localAuthService = async (email, _password) => {
  const findMember = await MemberServiceUtils.findMemberByEmailAndProvider(
    memberRepository,
    email,
    MemberProvider.LOCAL
  );
  PasswordUtils.checkPassword(
    email,
    _password,
    findMember.dataValues.salt,
    findMember.dataValues.password
  );
  return JwtUtils.createToken(findMember.dataValues.id);
};
