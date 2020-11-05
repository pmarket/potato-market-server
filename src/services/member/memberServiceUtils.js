import { ConflictException } from '../../exception/CustomExceptions';

export const validateNotExistMember = async (memberRepository, email) => {
  const findMember = await memberRepository.findMemberByEmail(email);
  if (findMember != null) {
    throw new ConflictException(`이미 존재하는 멤버입니다.`, email);
  }
};
