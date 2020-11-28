import db from '@src/config/knex';
import { InternalException } from '@src/exception/CustomException';

export const retrieveMyproduct = async (memberId) => {
  try {
    const myProducts = await db.raw(
      `SELECT * FROM product WHERE sender_id=${memberId}`
    );
    return myProducts[0];
  } catch (error) {
    throw new InternalException(error);
  }
};
