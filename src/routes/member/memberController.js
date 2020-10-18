import * as memberService from '../../services/member/memberService';

export const save = async (req, res) => {
  const { email, name, profileUrl } = req.body;
  await memberService.signUpMember(email, name, profileUrl);
  return res.status(200).send({
    data: 'OK',
  });
};
