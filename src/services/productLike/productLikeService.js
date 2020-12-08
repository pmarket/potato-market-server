import * as productLikeRepository from '@src/repository/productLikeRepository';
import * as productLikeServiceUtils from '@src/services/productLike/productLikeServiceUtils';

export const addProductLike = async (productId, memberId) => {
  await productLikeServiceUtils.validateNotExistProductLike(
    productLikeRepository,
    productId,
    memberId
  );
  await productLikeRepository.save(productId, memberId);
};

export const deleteProductLike = async (productId, memberId) => {
  await productLikeServiceUtils.validateExistProductLike(
    productLikeRepository,
    productId,
    memberId
  );
  await productLikeRepository.deleteProductLike(productId, memberId);
};

export const checkIsProductLike = async (productId, memberId) => {
  const productLike = await productLikeRepository.findProductLike(
    productId,
    memberId
  );
  return productLike === null ? false : true;
};
