import * as productLikeService from '@src/services/productLike/productLikeService';
import { ApiResponse } from '@src/ApiResponse';

export const addProductLike = async (req, res, next) => {
  const { productId } = req.body;
  const { memberId } = req;
  try {
    await productLikeService.addProductLike(productId, memberId);
    return res.status(200).json(new ApiResponse('OK'));
  } catch (error) {
    return next(error);
  }
};

export const deleteProductLike = async (req, res, next) => {
  const { productId } = req.query;
  const { memberId } = req;
  try {
    await productLikeService.deleteProductLike(productId, memberId);
    return res.status(200).json(new ApiResponse('OK'));
  } catch (error) {
    return next(error);
  }
};
