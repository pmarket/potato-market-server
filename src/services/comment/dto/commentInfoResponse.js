export const commentInfoResponse = (comment) => {
  return {
    id: comment.id,
    memberId: comment.memberId,
    productId: comment.productId,
    content: comment.content,
  };
};
