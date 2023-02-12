# 1SCJRBB - Microservices / Cloud Development (Azure)


## Video Microservices

No youtube [https://youtu.be/iYpLjoM98wQ](https://youtu.be/iYpLjoM98wQ)

## Video Cloud Development (Azure)

No youtube [https://youtu.be/7u5ptZkTYvM](https://youtu.be/7u5ptZkTYvM)


Projeto consiste em 3 microserviços

- Autenticador - Responsável pela autenticação de usuários
    - Trabalha com um banco de dados Postgres

- Boletos - Responsável pelas transações em boletos
    - Trabalha com um banco de dados Mysql

- Notificador - Responsável por notificar o TEAMS quando ocorrer um evento de interesse
    - Sem banco de dados 
    - Integração com o Teams

## Para executar o projeto

`docker-compose up --build`


- Todos os projetos sobem com swagger
    - Para acessar o swagger /api-docs

## Tecnologias utilizadas

- nodejs
- postgressql
- mysql
- docker
- swagger
