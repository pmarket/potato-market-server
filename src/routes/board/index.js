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
  db.raw(`INSERT INTO product(name, price, profile_url, sender_name) VALUES("${name}", ${price}, "${profileUrl}", "${senderName}")`)
    .then((response) => {
      console.log(response)
      res.status(200).send("Ok");
    }).catch((error) => {
      console.log(error);
      res.status(500).end("에러발생!!!!")
    })
});

/**
 * 모든 중고 거래 물건을 조회 하는 API
 * HTTP GET /api/v1/products
 */
router.get('/api/v1/products', (req, res) => {
  db.raw(`SELECT * FROM product`)
    .then((response) => {
      console.log(response[0])
      res.status(200).send(response[0])
    });
})


/**
 * 특정 중고 거래 물건을 조회하는 API
 * HTTP GET /api/v1/product?productId=1  <- 1 = product id
 */
router.get('/api/v1/product', (req, res) => {
  const productId = req.query.productId;
  db.raw(`SELECT id, name, profile_url, sender_name FROM product WHERE id = ${productId}`)
    .then((response) => {
      console.log(response[0])
      res.status(200).send(response[0])
    }).catch((error) => {
      console.log(error)
      res.status(500).end("에러발생....")
    })
});

export default router;
