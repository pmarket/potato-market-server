import { Model, DataTypes } from 'sequelize';
import * as MemberProvider from '@src/type/MemberProvider';

export default class Member extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          field: 'id',
          primaryKey: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          autoIncrement: true,
        },
        email: {
          field: 'email',
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
        memberId: {
          field: 'memberId',
          type: DataTypes.STRING,
        },
        password: {
          field: 'password',
          type: DataTypes.STRING,
        },
        name: {
          field: 'name',
          type: DataTypes.STRING,
          allowNull: false,
        },
        profileUrl: {
          field: 'profile_url',
          type: DataTypes.STRING,
        },
        provider: {
          type: DataTypes.ENUM({
            values: [MemberProvider.GOOGLE, MemberProvider.LOCAL],
          }),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'member',
        timestamps: true,
      }
    );
  }
}
