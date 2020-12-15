import { NotFoundException } from '@src/exception/CustomException';
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

export const deleteComment = async (commentId, memberId) => {
  const comment = await commentRepository.findCommentsByIdAndMemberId(
    commentId,
    memberId
  );
  if (comment == null) {
    throw new NotFoundException(
      '멤버에게 해당하는 댓글을 찾을 수 없습니다',
      commentId
    );
  }
  commentRepository.deleteComment(comment.id);
};

export const getCommentersProfile = async (productId) => {
  const commenters = await commentRepository.findMemberProfilesInCommentByProductId(
    productId
  );
  return commenters[0].map((commenter) => {
    return commenter.profile_url;
  });
};
