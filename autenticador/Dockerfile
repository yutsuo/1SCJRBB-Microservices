FROM node:14

ENV TZ America/Sao_Paulo

WORKDIR /usr/src/app

RUN mkdir -p /home/app/.cache

COPY ./package.json .

RUN npm install --verbose --production

COPY ./server.js .

COPY ./src ./src

EXPOSE 3000

CMD [ "npm", "run", "start" ]
