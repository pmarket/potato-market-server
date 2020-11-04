import * as memberRepository from '../../repository/memberRepository';
import getGoogleUserProfile from '../../externals/google/googleApiCaller';

export const googleAuthService = async (code) => {
  try {
    const userInfo = await getGoogleUserProfile(code);

    const { email, name, picture } = userInfo.data;

    const findMember = await memberRepository.findMemberByEmail(email);

    if (findMember == null) {
      // 해당하는 회원 정보가 없으면 회원가입 진행을 위한 정보 반환
      return {
        type: 'SIGN_UP',
        email: email,
        name: name,
        profileUrl: picture,
        token: null,
      };
    }
    // 로그인을 위한 토큰 생성후 반환
    return {
      type: 'LOGIN',
      email: null,
      name: null,
      profileUrl: null,
      token: 'something',
    };
  } catch (err) {
    console.log(err);
  }
};
