import * as commentRepository from '@src/repository/commentRepository';
import { commentInfoResponse } from '@src/services/comment/dto/commentInfoResponse';

export const addComment = async (productId, memberId, content) => {
  return await commentRepository.saveComment(productId, memberId, content);
};

export const retrieveProductComment = async (productId) => {
  const comments = await commentRepository.findCommentsByProductId(productId);
  return comments.map((comment) => {
    return commentInfoResponse(comment.dataValues);
  });
};
