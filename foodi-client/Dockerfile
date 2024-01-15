FROM node:20.11.0-alpine

WORKDIR /usr/src/app

COPY *.json .

RUN npm ci

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev", "--" , "--host"]
