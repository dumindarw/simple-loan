FROM node:16 AS build

WORKDIR /usr/app

#ENV NODE_ENV production

COPY package*.json ./

RUN npm install

COPY . .

COPY prod.env .env

EXPOSE 8050

CMD [ "node", "start.js" ]