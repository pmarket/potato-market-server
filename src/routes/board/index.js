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
  // TODO 게시물 등록하는거 만들어보기
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
 * HTTP GET /api/v1/products?productId=1  <- 1 = product id
 */
router.get('/api/v1/product', (req, res) => {
  const productId = req.query.productId;

  // TODO 특정 게시물을 조회하는 거 만들어보기
});

export default router;
