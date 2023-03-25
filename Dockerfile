FROM node:18-slim

WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -qq build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

COPY ./src/package*.json .

RUN npm install

COPY ./src .

CMD npm run start
