import { ApiResponse } from '@src/common/ApiResponse';
import * as authService from '@src/services/auth/authService';

export const googleAuthController = async (req, res, next) => {
  const { code } = req.query;
  try {
    const response = await authService.googleAuthService(code);
    return res.status(200).json(new ApiResponse(response));
  } catch (error) {
    return next(error);
  }
};
