import express from 'express';
import db from '../../config/knex';

const router = express.Router();

/**
 * 중고 거래 물건을 등록하는 API
 * HTTP POST /api/v1/product
 * {
 *    "name": "물건 이름",
 *    "price": 10000,
 *    "profileUrl": "http://image.png",
 *    "senderName": "누구누구"  (= 로그인 기능 구현안해서 일단 이런식으로 합시다!)
 * }
 */

router.post('/api/v1/product', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const profileUrl = req.body.profileUrl;
  const senderName = req.body.senderName;
  const content = req.body.content;

  db.raw(
    `INSERT INTO product(name, price, profile_url, sender_name, content) VALUES("${name}", ${price}, "${profileUrl}", "${senderName}", "${content}")`
  )
    .then((response) => {
      console.log(response);
      res.status(200).send('Ok');
    })
    .catch((error) => {
      console.log(error);
      res.status(500).end('에러발생!!!!');
    });
});

/**
 * 모든 중고 거래 물건을 조회 하는 API
 * HTTP GET /api/v1/products
 */
router.get('/api/v1/products', (req, res) => {
  db.raw(`SELECT * FROM product`).then((response) => {
    console.log(response[0]);
    res.status(200).send(response[0]);
  });
});

/**
 * 특정 중고 거래 물건을 조회하는 API
 * HTTP GET /api/v1/product?productId=1  <- 1 = product id
 */
router.get('/api/v1/product', (req, res) => {
  const productId = req.query.productId;
  db.raw(`SELECT id, name, price, content FROM product WHERE id = ${productId}`)
    .then((response) => {
      console.log(response[0]);
      res.status(200).send(response[0]);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).end('에러발생....');
    });
});

router.delete('/api/v1/product', (req, res) => {
  const productId = req.query.productId;
  db.raw(`SELECT id FROM product WHERE id =${productId}`).then((response) => {
    if (response[0].length === 0) {
      res.status(404).send('해당 상품을 찾을 수 없어요');
    }
    db.raw(`DELETE FROM product WHERE id = ${productId}`)
      .then(() => {
        res.status(200).send('OK');
      })
      .catch((error) => {
        res.status(500).end('에러발생..');
      });
  });

  /*router.put('/api/vi/product', (req, res) => {
    const productId = req.query.productId;
    db.raw(`SELECT id FROM WHERE id = ${product}`).then((response) => {
      if (response[0] === 0) {
        res.status(404).send('수정할 수 없습니다.');
      }
      db.raw(
        `UPDATE product SET name, price, profileUrl, senderName, content = "${name}", ${price}, "${profileUrl}", "${senderName}", "${content}"`
      )
        .then((response) => {
          res.status(200).log(response);
        })
        .catch((error) => {
          res.status(500).end('에러발생');
        });
    });
  });
  */
});
export default router;
