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

export const findCommentsByIdAndMemberId = async (commentId, memberId) => {
  return await Comment.findOne({
    where: {
      id: { [Op.eq]: commentId },
      memberId: { [Op.eq]: memberId },
    },
  });
};

export const deleteComment = async (commentId) => {
  return await Comment.destroy({
    where: {
      id: { [Op.eq]: commentId },
    },
  });
};
