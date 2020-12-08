import {
  ConflictException,
  NotFoundException,
} from '@src/exception/CustomException';

export const validateNotExistProductLike = async (
  productLikeRepository,
  productId,
  memberId
) => {
  const findProduct = await productLikeRepository.findProductLike(
    productId,
    memberId
  );
  if (findProduct !== null) {
    throw new ConflictException(
      '해당 상품에 대해 이미 좋아요 선택을 하였습니다.',
      productId
    );
  }
};

export const validateExistProductLike = async (
  productLikeRepository,
  productId,
  memberId
) => {
  const findProduct = await productLikeRepository.findProductLike(
    productId,
    memberId
  );
  if (findProduct === null) {
    throw new NotFoundException(
      '해당 상품에 대해 좋아요 하지 않았습니다.',
      productId
    );
  }
};
