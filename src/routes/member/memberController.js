import * as memberService from '@src/services/member/memberService';
import { ApiResponse } from '@src/common/ApiResponse';

export const signUpController = async (req, res, next) => {
  const { email, name, profileUrl } = req.body;
  try {
    const token = await memberService.signUpMember(email, name, profileUrl);
    return res.status(200).json(new ApiResponse(token));
  } catch (error) {
    return next(error);
  }
};

export const getMemberInfoController = async (req, res, next) => {
  try {
    const { memberId } = req;
    const memberInfo = await memberService.getMemberInfo(memberId);
    res.status(200).send(new ApiResponse(memberInfo));
  } catch (error) {
    return next(error);
  }
};
