FROM node:14

ENV TZ America/Sao_Paulo

WORKDIR /usr/src/app

COPY ./package.json .

RUN  npm install --verbose --production

COPY ./server.js .

COPY ./src ./src

COPY wait-and-run.sh .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
