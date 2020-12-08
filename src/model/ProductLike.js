import { Model, DataTypes } from 'sequelize';

export default class ProductLike extends Model {
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
        productId: {
          field: 'product_id',
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        memberId: {
          field: 'member_id',
          type: DataTypes.BIGINT,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'product_like',
        timestamps: true,
      }
    );
  }
}
