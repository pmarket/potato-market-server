export const productListResponse = (response) => {
  return {
    id: response.id,
    name: response.name,
    price: response.price,
    content: response.content,
    profileUrl: response.profile_url,
    place: response.place,
    isSold: response.is_sold,
    createdDateTime: response.created_data_time,
    senderProfileUrl: response.sender_profile_url,
  };
};

export const productDetailResponse = (response, comments) => {
  return {
    product: {
      id: response.productId,
      name: response.productName,
      price: response.price,
      content: response.content,
      profileUrl: response.productProfileUrl,
      place: response.place,
      isSold: response.is_sold,
      createdDateTime: response.created_data_time,
    },
    sender: {
      id: response.memberId,
      email: response.email,
      name: response.memberName,
      profileUrl: response.memberProfileUrl,
    },
    comments,
  };
};

export const toCommentResponse = (comment) => {
  return {
    id: comment.commentId,
    content: comment.content,
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt,
    commenter: {
      id: comment.memberId,
      email: comment.email,
      name: comment.memberName,
      profileUrl: comment.memberProfileUrl,
    },
  };
};
