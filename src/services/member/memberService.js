import * as memberRepository from '../../repository/memberRepository';

export const signUpMember = async (email, name, profileUrl) => {
  const findMember = await memberRepository.findMemberByEmail(email);
  if (findMember != null) {
    // TODO: Custom Error
    throw new Error('Already Exists Member');
  }
  await memberRepository.saveMember({
    email: email,
    name: name,
    profileUrl: profileUrl,
  });
  // TODO 로그인 처리 후 세선 값 or 토큰 반환하기.
};
