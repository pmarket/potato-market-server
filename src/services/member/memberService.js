import * as memberRepository from '../../repository/memberRepository';
import * as memberServiceUtils from './memberServiceUtils';

export const signUpMember = async (email, name, profileUrl) => {
  await memberServiceUtils.validateNotExistMember(memberRepository, email);
  await memberRepository.saveMember({
    email: email,
    name: name,
    profileUrl: profileUrl,
  });
  // TODO 로그 인 처리 후 세선 값 or 토큰 반환하기.
};
