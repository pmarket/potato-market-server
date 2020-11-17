import * as memberService from '@src/services/member/memberService';
import { ApiResponse } from '@src/ApiResponse';
import { ValidationException } from '@src/exception/CustomException';

export const signUpGoogleController = async (req, res, next) => {
  const { email, name, profileUrl } = req.body;
  try {
    _validateEmailFormat(email);
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
    _validateEmailFormat(email);
    _validatePasswordFormat(password);
    const token = await memberService.signUpLocalMember(email, name, password);
    return res.status(200).json(new ApiResponse(token));
  } catch (error) {
    return next(error);
  }
};

const _validateEmailFormat = (email) => {
  const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if (regExp.test(email) == false) {
    throw new ValidationException('이메일 형식이 아닙니다', email);
  }
};

const _validatePasswordFormat = (password) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}/;
  if (regex.test(password) == false) {
    throw new ValidationException('비밀번호 규칙에 어긋납니다');
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
