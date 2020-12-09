import { InternalException } from '@src/exception/CustomException';
import * as productRepository from '@src/repository/productRepository';
import * as commentService from '@src/services/comment/commentService';
import { myProductResponse } from '@src/services/product/dto/myProductInfoResponse';
import * as productLikeService from '@src/services/productLike/productLikeService';

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

const getProductIds = (likes) => {
  return likes.map((like) => {
    return JSON.stringify(like.productId);
  });
};

export const retrieveMyLikeproducts = async (memberId) => {
  try {
    const likes = await productLikeService.retrieveMyLikeProducts(memberId);
    const likeProdudts = await productRepository.findProductsByIds(
      getProductIds(likes)
    );
    return likeProdudts[0];
  } catch (error) {
    throw new InternalException(error);
  }
};
