import { InternalException } from '@src/exception/CustomException';
import * as productRepository from '@src/repository/productRepository';
import * as commentService from '@src/services/comment/commentService';
import { myProductResponse } from '@src/services/product/dto/myProductInfoResponse';

export const retrieveMyproduct = async (memberId) => {
  try {
    const myProducts = await productRepository.findProductsBySenderId(memberId);
    return await Promise.all(
      myProducts[0].map(async (myProduct) => {
        return myProductResponse(
          myProduct,
          await commentService.getCommentersProfile(myProduct.id)
        );
      })
    );
  } catch (error) {
    throw new InternalException(error);
  }
};
