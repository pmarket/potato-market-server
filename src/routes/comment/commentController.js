import * as commentService from '@src/services/comment/commentService';
import { ApiResponse } from '@src/ApiResponse';

export const addNewComment = async (req, res, next) => {
  const { productId, content } = req.body;
  try {
    await commentService.addComment(productId, req.memberId, content);
    return res.status(200).json(new ApiResponse('OK'));
  } catch (error) {
    return next(error);
  }
};

export const retrieveProductComment = async (req, res, next) => {
  const { productId } = req.query;
  try {
    const comments = await commentService.retrieveProductComment(productId);
    return res.status(200).json(new ApiResponse(comments));
  } catch (error) {
    return next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  const { commentId } = req.query;
  try {
    await commentService.deleteComment(commentId, req.memberId);
    return res.status(200).json(new ApiResponse('OK'));
  } catch (error) {
    return next(error);
  }
};
