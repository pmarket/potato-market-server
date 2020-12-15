import { NotFoundException } from '@src/exception/CustomException';

export const validateExistProduct = async (productRepository, productId) => {
  const findProduct = await productRepository.findProductById(productId);
  if (findProduct[0].length === 0) {
    throw new NotFoundException(
      '해당하는 id를 가진 상품은 존재하지 않습니다',
      productId
    );
  }
};
