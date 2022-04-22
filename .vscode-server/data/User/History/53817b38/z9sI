FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

COPY ./commons commons

COPY ./RgbToHslConverter RgbToHslConverter

RUN npm install

WORKDIR /usr/src/app/RgbToHslConverter

RUN npm install

EXPOSE 3000

CMD ["node", "src/HttpServer.js"]
