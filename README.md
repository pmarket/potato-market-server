# 감자마켓 백엔드

> 중고 거래 서비스 API 서버

### 🥔 Potato Market

감자마켓은 사용자들이 편하고 쉽게 중고 거래를 할 수 있도록 도와주는 웹 서비스 입니다.

### 1️⃣ 편리한 인증 방식

이메일과 비밀번호를 통해 로그인을 할 수 있으며, 구글 소셜을 통해서도 간편하게 로그인하실 수 있습니다.

### 2️⃣ 중고 물건 등록

판매하고자 하는 물건의 간단한 등록 OK~

### 3️⃣ 판매중인 중고 물건 보기 & 찜하기 & 링크 공유

현재 판매중인 물건들을 보실 수 있으며, "좋아요" 기능을 통해 관심 있는 물건을 체크해두고 따로 보실 수 있습니다~

또한 친구에게 해당 물건에 대한 링크 복사를 통해 간편하게 공유하실 수 있습니다~

### 4️⃣ 판매자에게 질문

언제든지 댓글을 통해 판매자에게 물건에 대해 확인하실 수 있습니다~

### 5️⃣ 판매 관리

판매자는 간편하게 판매글을 관리할 수 있고,

판매중인 상품에 새로운 댓글이 올라왔는지 판매 관리 페이지에서 쉽게 확인하실 수 있습니다.

그리고 과거에 판매완료한 물건들에 대한 기록을 볼 수 있습니다~

# 개발 스택 및 인프라 구성

## 감자마켓 서버 아키텍처

<img src="/_images/model.png" width="100%" height="100%" title="아키텍처 모델" alt="아키텍처 모델"></img>

## 개발 스택

- javascript(ES6) + Node.js
- Sequelize.js
- mocha test

## 인프라

- AWS Elastic Container Service (ECS) + Fargate + AWS Elastic Container Registry (ECR)
- AWS RDS (MySQL 5.7)
- AWS Application Load Balancer (ALB)
- Github Action CI/CD
- AWS Route53

## Script

### Install

`yarn install`

### Test

`yarn test`

### Run

`yarn start`
