import { ApiResponse } from '../../common/apiResponse';
import { googleAuthService } from '../../services/auth/authService';

export const googleAuthController = async (req, res, next) => {
  const code = req.query.code;
  try {
    const response = await googleAuthService(code);
    return res.status(200).json(new ApiResponse(response));
  } catch (error) {
    return next(error);
  }
};
