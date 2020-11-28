import * as myProductService from '@src/services/product/myProductService';
import { ApiResponse } from '@src/ApiResponse';

export const retrieveMyProduct = async (req, res, next) => {
  const { memberId } = req;
  try {
    const myProducts = await myProductService.retrieveMyproduct(memberId);
    return res.status(200).json(new ApiResponse(myProducts));
  } catch (error) {
    return next(error);
  }
};
