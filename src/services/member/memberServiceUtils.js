import {
  ConflictException,
  NotFoundException,
} from '@src/exception/CustomException';

export const validateNotExistMember = async (
  memberRepository,
  email,
  provider
) => {
  const findMember = await memberRepository.findMemberByEmailAndProvider(
    email,
    provider
  );
  if (findMember != null) {
    throw new ConflictException(`이미 존재하는 멤버입니다.`, email);
  }
};

export const findMemberByEmailAndProvider = async (
  memberRepository,
  email,
  provider
) => {
  const findMember = await memberRepository.findMemberByEmailAndProvider(
    email,
    provider
  );
  if (findMember == null) {
    throw new NotFoundException(
      '해당하는 이메일과 비밀번호를 가진 유저를 찾을 수 없습니다',
      email
    );
  }
  return findMember;
};
