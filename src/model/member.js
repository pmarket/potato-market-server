import { Model, DataTypes } from 'sequelize';

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
        },
        name: {
          field: 'name',
          type: DataTypes.STRING,
        },
        profileUrl: {
          field: 'profile_url',
          type: DataTypes.STRING,
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
