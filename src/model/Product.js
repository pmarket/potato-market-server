import { Model, DataTypes } from 'sequelize';

export default class Product extends Model {
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
        name: {
          field: 'name',
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        price: {
          field: 'price',
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        content: {
          field: 'content',
          type: DataTypes.TEXT,
        },
        profileUrl: {
          field: 'profile_url',
          type: DataTypes.STRING,
        },
        place: {
          field: 'place',
          type: DataTypes.STRING(50),
        },
        senderId: {
          field: 'sender_id',
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        isSold: {
          field: 'is_sold',
          type: DataTypes.TINYINT(1),
          allowNull: false,
          defaultValue: false,
        },
        createdAt: {
          field: 'created_data_time',
          type: DataTypes.DATE,
          defaultValue: sequelize.literal('NOW()'),
        },
        updatedAt: {
          field: 'updated_data_time',
          type: DataTypes.DATE,
          defaultValue: sequelize.literal('NOW()'),
        },
      },
      {
        sequelize,
        tableName: 'product',
      }
    );
  }
}
