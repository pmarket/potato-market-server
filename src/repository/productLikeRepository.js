import { Op } from 'sequelize';
import ProductLike from '@src/model/ProductLike';

export const save = async (productId, memberId) => {
  return await ProductLike.create({
    productId: productId,
    memberId: memberId,
  });
};

export const findProductLike = async (productId, memberId) => {
  return await ProductLike.findOne({
    where: {
      productId: { [Op.eq]: productId },
      memberId: { [Op.eq]: memberId },
    },
  });
};

export const deleteProductLike = async (productId, memberId) => {
  return await ProductLike.destroy({
    where: {
      productId: { [Op.eq]: productId },
      memberId: { [Op.eq]: memberId },
    },
  });
};
