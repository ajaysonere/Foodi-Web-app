FROM node:20.11.0-alpine

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY *.json ./

RUN npm ci

COPY . .

EXPOSE 5100

CMD [ "npm","run","dev"]