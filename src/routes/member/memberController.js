import * as memberService from '../../services/member/memberService';
import { ApiResponse } from '../../common/apiResponse';

export const signUpController = async (req, res, next) => {
  const { email, name, profileUrl } = req.body;
  try {
    const token = await memberService.signUpMember(email, name, profileUrl);
    return res.status(200).json(new ApiResponse(token));
  } catch (error) {
    return next(error);
  }
};
