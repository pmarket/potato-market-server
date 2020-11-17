export const memberInfoResponse = (member) => {
  return {
    id: member.id,
    memberId: member.memberId,
    email: member.email,
    name: member.name,
    profileUrl: member.profileUrl,
    provider: member.provider,
  };
};
