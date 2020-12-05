# 감자마켓 백엔드

> 중고 거래 API 서버

### 전체 아키텍처 모델

<img src="/_images/model.png" width="100%" height="100%" title="아키텍처 모델" alt="아키텍처 모델"></img>

## 개발 스택

- javascript(ES6) + Node.js(12)
- Sequelize.js
- mocha test

## 인프라

### Production

- AWS ECS + Fargate + AWS ECR
- AWS RDS (MySQL 5.7)
- Application Load Balancer (ALB)
- Github Action CI/CD

### Install

`yarn install`

### Test

`yarn test`

### Run

`yarn start`
