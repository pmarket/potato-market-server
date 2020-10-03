# 감자마켓 백엔드

### Docker-compose로 로컬에서 컨테이너 띄우는 방법

```
docker-compose up -d --build

docker ps -a
$ docker ps -a
CONTAINER ID        IMAGE                                                                         COMMAND             CREATED             STATUS              PORTS                    NAMES
b1f169b10c8f        788906588229.dkr.ecr.ap-northeast-2.amazonaws.com/potato-backend-ecr:latest   "yarn start"        15 seconds ago      Up 15 seconds       0.0.0.0:8000->8000/tcp   potato-backend_dev_1
```

### Install

`yarn install`

### Build

`yarn build`

### Run

`yarn start`

### Run local"

`yarn start:local`

### Test

`yarn test`
