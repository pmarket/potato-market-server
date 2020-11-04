export const authResponse = (type, email, name, profileUrl, token) => {
  return {
    type: type,
    email: email,
    name: name,
    profileUrl: profileUrl,
    token: token,
  };
};
