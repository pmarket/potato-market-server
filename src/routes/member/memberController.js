import * as memberService from '@src/services/member/memberService';
import { ApiResponse } from '@src/ApiResponse';

export const signUpGoogleController = async (req, res, next) => {
  const { email, name, profileUrl } = req.body;
  try {
    const token = await memberService.signUpGoogleMember(
      email,
      name,
      profileUrl
    );
    return res.status(200).json(new ApiResponse(token));
  } catch (error) {
    return next(error);
  }
};

export const signUpLocalController = async (req, res, next) => {
  const { email, name, password } = req.body;
  try {
    const token = await memberService.signUpLocalMember(email, name, password);
    return res.status(200).json(new ApiResponse(token));
  } catch (error) {
    return next(error);
  }
};

export const getMemberInfoController = async (req, res, next) => {
  const { memberId } = req;
  try {
    const memberInfo = await memberService.getMemberInfo(memberId);
    res.status(200).send(new ApiResponse(memberInfo));
  } catch (error) {
    return next(error);
  }
};
