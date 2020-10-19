import * as memberService from '../../services/member/memberService';
import { ApiResponse } from '../apiResponse';

export const save = async (req, res, next) => {
  const { email, name, profileUrl } = req.body;
  try {
    await memberService.signUpMember(email, name, profileUrl);
  } catch (error) {
    error['code'] = 404; // TODO throw new NotFoundError() 하면 자동으로 404되게끔 변경해야함.
    error['message'] = 'Already Exists Member';
    return next(error);
  }
  return res.status(200).json(new ApiResponse('OK'));
};
