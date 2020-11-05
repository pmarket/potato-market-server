export const memberInfoResponse = (member) => {
  return {
    id: member.id,
    email: member.email,
    name: member.name,
    profileUrl: member.profileUrl,
  };
};
