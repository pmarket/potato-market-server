export const myProductResponse = (myProduct, commentersProfile) => {
  return {
    id: myProduct.id,
    name: myProduct.name,
    price: myProduct.price,
    content: myProduct.content,
    profile_url: myProduct.profile_url,
    is_sold: myProduct.is_sold,
    place: myProduct.place,
    commenters: commentersProfile,
  };
};
