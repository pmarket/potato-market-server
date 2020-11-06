import { expect } from 'chai';
import * as memberRepository from '@src/repository/memberRepository';
import { sequelize, models } from '@src/model';

describe('Member Repository', function () {
  beforeEach(() => sequelize.sync({ force: true }));

  it('findEmail() 해당 이메일을 가진 멤버가 반환된다', async function () {
    // given
    const email = 'will.seungho@gmail.com';
    const name = 'alice';
    const profileUrl = 'http://profileUrl.com';

    const member = { email: email, name: name, profileUrl: profileUrl };
    models.Member.bulkCreate([member]);

    // when
    const findMember = await memberRepository.findMemberByEmail(email);

    // then
    expect(findMember.dataValues.email).to.eq(email);
    expect(findMember.dataValues.name).to.eq(name);
    expect(findMember.dataValues.profileUrl).to.eq(profileUrl);
  });
});
