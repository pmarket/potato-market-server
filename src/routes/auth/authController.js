import { ApiResponse } from '../../common/ApiResponse';
import * as authService from '../../services/auth/authService';

export const googleAuthController = async (req, res, next) => {
  const { code } = req.query;
  try {
    const response = await authService.googleAuthService(code);
    return res.status(200).json(new ApiResponse(response));
  } catch (error) {
    return next(error);
  }
};
