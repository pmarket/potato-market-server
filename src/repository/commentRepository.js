import { Op } from 'sequelize';
import Comment from '@src/model/Comment';

export const saveComment = async (productId, memberId, content) => {
  return await Comment.create({
    productId: productId,
    memberId: memberId,
    content: content,
  });
};

export const findCommentsByProductId = async (productId) => {
  return await Comment.findAll({
    where: {
      productId: { [Op.eq]: productId },
    },
  });
};
