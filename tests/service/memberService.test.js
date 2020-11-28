import { expect } from 'chai';
import { sequelize, models } from '@src/model';
import * as memberService from '@src/services/member/memberService';

describe('Member Service', function () {
  beforeEach(() => sequelize.sync({ force: true }));

  it('회원가입시 새로운 유저가 등록된다', async function () {
    // given
    const email = 'will.seungho@gmail.com';
    const name = '강승호';
    const profileUrl = 'http://profileUrl.com';

    // when
    await memberService.signUpGoogleMember(email, name, profileUrl);

    // then
    const members = await models.Member.findAll();
    expect(members.length).to.eq(1);
    expect(members[0].dataValues.email).to.eq(email);
    expect(members[0].dataValues.name).to.eq(name);
    expect(members[0].dataValues.profileUrl).to.eq(profileUrl);
    expect(members[0].dataValues.provider).to.eq('GOOGLE');
  });
});
