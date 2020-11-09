import { ApiResponse } from '@src/ApiResponse';
import * as authService from '@src/services/auth/authService';

export const googleAuthController = async (req, res, next) => {
  const { code, redirectUri } = req.query;
  try {
    const response = await authService.googleAuthService(code, redirectUri);
    return res.status(200).json(new ApiResponse(response));
  } catch (error) {
    return next(error);
  }
};
