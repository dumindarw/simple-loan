FROM node:16 AS build

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

COPY prod.env .env

RUN npm run-script build

FROM nginx:1.21.4-alpine

COPY nginx.conf /etc/nginx/
COPY default.conf /etc/nginx/conf.d/
COPY mime.types /etc/nginx/
WORKDIR /usr/share/nginx/html

COPY --from=build /usr/app/build /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]