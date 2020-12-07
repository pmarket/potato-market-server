import { sequelize } from '@src/model';

export const findProductsBySenderId = async (senderId) => {
  return await sequelize.query(
    `SELECT * FROM product WHERE sender_id=${senderId}`
  );
};
