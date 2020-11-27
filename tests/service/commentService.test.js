import { expect } from 'chai';
import { sequelize, models } from '@src/model';
import * as commentService from '@src/services/comment/commentService';

describe('Comment Service', function () {
  beforeEach(() => sequelize.sync({ force: true }));

  it('새로운 댓글을 추가한다', async function () {
    // given
    const productId = 3;
    const memberId = 1;
    const content = '살래요!';

    // when
    await commentService.addComment(productId, memberId, content);

    // then
    const comments = await models.Comment.findAll();
    expect(comments.length).to.eq(1);
    expect(comments[0].dataValues.content).to.eq(content);
    expect(comments[0].dataValues.productId).to.eq(productId);
    expect(comments[0].dataValues.memberId).to.eq(memberId);
  });

  it('특정 상품에 해당하는 댓글들을 조회한다', async function () {
    // given
    const productId = 3;
    const memberId = 1;
    const content = '살래요!';

    const comment = {
      productId: productId,
      memberId: memberId,
      content: content,
    };
    models.Comment.bulkCreate([comment]);

    // when
    const comments = await commentService.retrieveProductComment(productId);
    expect(comments.length).to.eq(1);
    expect(comments[0].content).to.eq(content);
    expect(comments[0].productId).to.eq(productId);
    expect(comments[0].memberId).to.eq(memberId);
  });
});
