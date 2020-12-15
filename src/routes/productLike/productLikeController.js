import * as productLikeService from '@src/services/productLike/productLikeService';
import { ApiResponse } from '@src/ApiResponse';

export const toggleProductLike = async (req, res, next) => {
  const { productId } = req.body;
  const { memberId } = req;
  try {
    const response = await productLikeService.toggleProductLike(
      productId,
      memberId
    );
    return res.status(200).json(new ApiResponse(response));
  } catch (error) {
    return next(error);
  }
};
