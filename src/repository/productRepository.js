import { sequelize } from '@src/model';

export const findProductsBySenderId = async (senderId) => {
  return await sequelize.query(
    `SELECT * FROM product WHERE sender_id=${senderId}`
  );
};

export const getCountOfProduct = async () => {
  return await sequelize.query(`SELECT COUNT(*) as total_count FROM product`);
};

export const findProductsPageableByKeword = async (keyword, limit, offset) => {
  return await sequelize.query(
    `SELECT distinct 
         p.id, p.name, p.price, p.content, p.profile_url, p.place,
         p.is_sold, p.created_data_time, member.profile_url as sender_profile_url
         FROM product as p
         INNER JOIN member
         ON p.sender_id = member.id
         WHERE p.name LIKE '%${keyword}%' OR p.content LIKE '%${keyword}%' 
         ORDER BY created_data_time DESC 
         LIMIT ${limit} OFFSET ${offset * limit}`
  );
};
