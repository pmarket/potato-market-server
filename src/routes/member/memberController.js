import * as memberService from '../../services/member/memberService';
import { ApiResponse } from '../apiResponse';

export const save = async (req, res) => {
  const { email, name, profileUrl } = req.body;
  await memberService.signUpMember(email, name, profileUrl);

  return res.status(200).json(new ApiResponse('OK'));
};
