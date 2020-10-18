# 감자마켓 백엔드

> Node.js로 만드는 중고 거래 API 서버

### Docker-compose로 로컬에서 컨테이너 띄우는 방법

```
docker-compose up -d --build

docker ps -a
$ docker ps -a
CONTAINER ID        IMAGE                                                                         COMMAND             CREATED             STATUS              PORTS                    NAMES
b1f169b10c8f        788906588229.dkr.ecr.ap-northeast-2.amazonaws.com/potato-backend-ecr:latest   "yarn start"        15 seconds ago      Up 15 seconds       0.0.0.0:8000->8000/tcp   potato-backend_dev_1
```

### 환경설정 파일 (로컬)

.env.local

```
PORT=8000
DB_DATABASE=...
DB_USERNAME=...
DB_PASSWORD=...
DB_HOST=localhost
DB_PORT=3306
```

### Install

`yarn install`

### Build

`yarn build`

### Run

`yarn start`

### Run local

`yarn start:local`

### Test

`yarn test`
