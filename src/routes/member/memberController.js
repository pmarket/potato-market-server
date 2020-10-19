import * as memberService from '../../services/member/memberService';
import { ApiResponse } from '../apiResponse';

export const save = async (req, res, next) => {
  const { email, name, profileUrl } = req.body;
  try {
    await memberService.signUpMember(email, name, profileUrl);
  } catch (error) {
    return next(error);
  }
  return res.status(200).json(new ApiResponse('OK'));
};
