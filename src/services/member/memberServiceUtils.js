import { ConflictException } from '@src/exception/CustomException';

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
