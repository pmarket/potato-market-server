import { expect } from 'chai';
import { sequelize, models } from '@src/model';
import * as productLikeService from '@src/services/productLike/productLikeService';

describe('ProductLike Service', function () {
  beforeEach(() => sequelize.sync({ force: true }));

  it('상품을 좋아요했을 경우 true 반환', async function () {
    // given
    const productId = 3;
    const memberId = 1;

    await models.ProductLike.bulkCreate([
      {
        productId: productId,
        memberId: memberId,
      },
    ]);

    // when & then
    const result = await productLikeService.checkIsProductLike(
      productId,
      memberId
    );
    expect(result).to.eq(true);
  });

  it('상품을 좋아요 하지 않았을 경우 false 반환', async function () {
    // given
    const productId = 3;
    const memberId = 1;

    // when & then
    const result = await productLikeService.checkIsProductLike(
      productId,
      memberId
    );
    expect(result).to.eq(false);
  });
});
