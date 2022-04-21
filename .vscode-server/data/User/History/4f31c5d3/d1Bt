FROM node:alpine

WORKDIR /usr/src/app

COPY ./dist .

EXPOSE 3000

CMD ["node", "RgbToCmykConverter/src/HttpServer.js"]