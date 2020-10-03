#!/bin/bash

cd /home/ubuntu/build

docker-compose down

sleep 10

docker-compose up -d --build