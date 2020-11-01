#!/bin/bash

DOCKER_APP_NAME=potato-backend

aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 788906588229.dkr.ecr.ap-northeast-2.amazonaws.com

EXIST_BLUE=$(docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml ps | grep Up)

if [ -z "$EXIST_BLUE" ]; then
    echo "Blue Up"
    docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml up -d --build

    sleep 30

    echo "Green Down"
    docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml down
else
    echo "Green Up"
    docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml up -d --build

    sleep 30

    echo "Blue Down"
    docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml down
fi