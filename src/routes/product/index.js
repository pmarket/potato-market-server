import express from 'express';
import db from '@src/config/knex';
import { validateAuthToken } from '@src/middleware/authTokenValidator';
import { validateRequestValues } from '@src/middleware/requestValidator';

const router = express.Router();

/**
 * 중고 거래 물건을 등록하는 API
 */
router.post('/api/v1/product', validateAuthToken, (req, res, next) => {
  const { name, price, profileUrl, content } = req.body;
  const { memberId } = req;

  db.raw(
    `INSERT INTO product(name, price, profile_url, content, sender_id) VALUES("${name}", ${price}, "${profileUrl}", "${content}", ${memberId})`
  )
    .then(() => {
      res.status(200).send('Ok');
    })
    .catch((error) => {
      next(error);
    });
});

/**
 * 모든 중고 거래 물건을 조회 하는 API
 */
router.get('/api/v1/products', (_req, res, next) => {
  db.raw(`SELECT * FROM product`)
    .then((response) => {
      const senderIds = [];
      response[0].forEach(function (product) {
        senderIds.push(product.sender_id);
      });
      console.log(senderIds);
      res.status(200).send(response[0]);
    })
    .catch((error) => {
      next(error);
    });
});

/**
 * 특정 중고 거래 물건을 조회하는 API
 */
router.get('/api/v1/product', (req, res, next) => {
  const productId = req.query.productId;
  db.raw(`SELECT * FROM product WHERE id = ${productId}`)
    .then((response) => {
      res.status(200).send(response[0]);
    })
    .catch((error) => {
      next(error);
    });
});

/**
 * 특정 중고 거래 물건을 삭제하는 API
 */
router.delete(
  '/api/v1/product',
  validateRequestValues('query', ['productId']),
  validateAuthToken,
  (req, res, next) => {
    const { productId } = req.query;
    const { memberId } = req;
    db.raw(
      `SELECT id FROM product WHERE id =${productId} AND sender_id=${memberId}`
    ).then((response) => {
      if (response[0].length === 0) {
        res.status(404).send('해당 상품을 찾을 수 없어요');
      }
      db.raw(
        `DELETE FROM product WHERE id = ${productId} AND sender_id=${memberId}`
      )
        .then(() => {
          res.status(200).send('OK');
        })
        .catch((error) => {
          next(error);
        });
    });
  }
);

/**
 * 특정 중고 거래 물건을 수정하는 API
 */
router.put(
  '/api/v1/product',
  validateRequestValues('body', [
    'productId',
    'name',
    'price',
    'profileUrl',
    'content',
  ]),
  validateAuthToken,
  (req, res, next) => {
    const { productId, name, price, profileUrl, content } = req.body;
    const { memberId } = req;
    db.raw(
      `SELECT * FROM product WHERE id = ${productId} AND sender_id=${memberId}`
    ).then((response) => {
      if (response[0].length === 0) {
        res.status(404).send('해당하는 상품은 존재하지 않습니다');
      }
      db.raw(
        `UPDATE product SET name="${name}", price=${price}, profile_url="${profileUrl}", content="${content}"
      WHERE id=${productId} AND sender_id=${memberId} AND is_sold=false`
      )
        .then(() => {
          res.status(200).send('수정 완료');
        })
        .catch((error) => {
          next(error);
        });
    });
  }
);

export default router;
