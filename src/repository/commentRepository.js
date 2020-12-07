import { Op } from 'sequelize';
import Comment from '@src/model/Comment';
import { sequelize } from '@src/model';

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

export const findMemberProfilesInCommentByProductId = async (productId) => {
  return await sequelize.query(`
    SELECT distinct member.id, member.profile_url
    FROM comment 
    INNER JOIN member 
    ON comment.member_id = member.id
    WHERE comment.product_id = ${productId}`);
};
