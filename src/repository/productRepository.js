import db from '@src/config/knex';

export const findProductsBySenderId = async (senderId) => {
  return await db.raw(`SELECT * FROM product WHERE sender_id=${senderId}`);
};
