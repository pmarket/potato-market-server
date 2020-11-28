import { expect } from 'chai';
import * as commentRepository from '@src/repository/commentRepository';
import { sequelize, models } from '@src/model';

describe('Comment Repository', function () {
  beforeEach(() => sequelize.sync({ force: true }));

  it('saveComment', async function () {
    // given
    const productId = 3;
    const memberId = 1;
    const content = '살래요!';

    // when
    await commentRepository.saveComment(productId, memberId, content);

    // then
    const comments = await models.Comment.findAll();
    expect(comments.length).to.eq(1);
    expect(comments[0].productId).to.eq(productId);
    expect(comments[0].memberId).to.eq(memberId);
    expect(comments[0].content).to.eq(content);
  });

  it('findAll()', async function () {
    // given
    const productId = 3;
    const memberId = 1;
    const content = '살래요!';

    const productComment = {
      productId: productId,
      memberId: memberId,
      content: content,
    };
    const notProductComment = {
      productId: 123,
      memberId: memberId,
      content: content,
    };
    models.Comment.bulkCreate([productComment, notProductComment]);

    // when
    const findComments = await commentRepository.findCommentsByProductId(
      productId
    );

    // then
    expect(findComments.length).to.eq(1);
    expect(findComments[0].productId).to.eq(productId);
    expect(findComments[0].memberId).to.eq(memberId);
    expect(findComments[0].content).to.eq(content);
  });
});
