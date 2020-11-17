import { ApiResponse } from '@src/ApiResponse';
import * as authService from '@src/services/auth/authService';

export const googleAuthController = async (req, res, next) => {
  try {
    const { code, redirectUri } = req.query;
    const response = await authService.googleAuthService(code, redirectUri);
    return res.status(200).json(new ApiResponse(response));
  } catch (error) {
    return next(error);
  }
};

export const googleLocalController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const response = await authService.localAuthService(email, password);
    return res.status(200).json(new ApiResponse(response));
  } catch (error) {
    return next(error);
  }
};
