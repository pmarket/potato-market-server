# Stage 1
FROM node:12-alpine AS BUILD

ENV APP_HOME=/usr/src/app

WORKDIR ${APP_HOME}

COPY package.json  ./

COPY .babelrc ./

RUN yarn install

COPY ./src ./src

RUN yarn run build

# Stage 2
FROM node:12-alpine

ENV APP_HOME=/usr/src/app

WORKDIR ${APP_HOME}

COPY package.json  ./

COPY .babelrc ./

RUN yarn install

COPY .env.prod ./

COPY --from=BUILD ${APP_HOME}/dist ./dist

ENTRYPOINT ["yarn", "start:prod"]