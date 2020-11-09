import * as memberRepository from '@src/repository/memberRepository';
import * as googleApiCaller from '@src/externals/google/googleApiCaller';
import * as jwtUtils from '@src/utils/jwt';
import { authResponse } from '@src/services/auth/dto/authResponse';

export const googleAuthService = async (code, redirectUri) => {
  const userInfo = await googleApiCaller.getGoogleUserProfile(
    code,
    redirectUri
  );

  const { email, name, picture } = userInfo.data;
  const findMember = await memberRepository.findMemberByEmail(email);
  if (findMember == null) {
    // 해당 유저가 없을 경우, 회원가입을 위한 정보 반환한다.
    return authResponse('SIGN_UP', email, name, picture, null);
  }
  // 해당 유저가 있을 경우, 로그인을 진행한다.
  const token = jwtUtils.createToken(findMember.dataValues.id);
  return authResponse('LOGIN', null, null, null, token);
};
