FROM node:12

WORKDIR /potato
COPY . /potato

RUN yarn install
RUN yarn run build

ENTRYPOINT ["yarn", "start:prod"]