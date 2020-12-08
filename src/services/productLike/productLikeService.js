import * as productLikeRepository from '@src/repository/productLikeRepository';
import { productLikeResonse } from '@src/services/productLike/dto/productLikeResponse';
import * as productRepository from '@src/repository/productRepository';
import * as productServieUtils from '@src/services/product/productServiceUtils';

export const toggleProductLike = async (productId, memberId) => {
  await productServieUtils.validateExistProduct(productRepository, productId);
  const findProduct = await productLikeRepository.findProductLike(
    productId,
    memberId
  );
  if (findProduct === null) {
    // 좋아요 되지 않은 경우 좋아요 추가
    await productLikeRepository.save(productId, memberId);
    return productLikeResonse(productId, true);
  }
  // 좋아요 되있는 경우 좋아요 삭제
  await productLikeRepository.deleteProductLike(productId, memberId);
  return productLikeResonse(productId, false);
};

export const checkIsProductLike = async (productId, memberId) => {
  const productLike = await productLikeRepository.findProductLike(
    productId,
    memberId
  );
  return productLike === null ? false : true;
};
