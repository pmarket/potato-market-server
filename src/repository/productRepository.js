import { sequelize } from '@src/model';

/**
 * TODO: Product -> Sequelize Model 추가 및 ORM로 수정
 */

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
         p.id, p.name, p.price, p.content, p.profile_url, p.place, p.is_sold, p.created_data_time, member.profile_url as sender_profile_url
         FROM product as p
         JOIN (SELECT id
                FROM product
                WHERE name LIKE '%${keyword}%' OR content LIKE '%${keyword}%'
                ORDER BY id DESC 
                LIMIT ${limit}
                OFFSET ${offset * limit}) as temp ON temp.id = p.id
         INNER JOIN member
         ON p.sender_id = member.id
         ORDER BY p.id DESC`
  );
};

export const findProductById = async (productId) => {
  return await sequelize.query(`SELECT * FROM product WHERE id = ${productId}`);
};

export const findProductsByIds = async (productIds) => {
  return await sequelize.query(
    `SELECT distinct
      p.id, p.name, p.price, p.content, p.profile_url, p.place, p.is_sold, p.created_data_time, member.profile_url as sender_profile_url
      FROM product as p
      INNER JOIN member
      ON p.sender_id = member.id
      WHERE p.id IN (${productIds.join()})
      ORDER BY p.id DESC`
  );
};
