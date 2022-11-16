const mysql = require("mysql2");

const connection = () => {
  return new mysql.createConnection({
    host: process.env.HOST_MYSQL,
    user: process.env.USER_MYSQL,
    password: process.env.PASSWORD_MYSQL,
    database: process.env.DATABASE_MYSQL,
    port: process.env.PORTA_MYSQL,
    insecureAuth: true,
  });
};
exports.criaTabelaBoletos = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let conn = await connection();

      let sql = `CREATE TABLE if not exists boletos (
                    id MEDIUMINT NOT NULL AUTO_INCREMENT,
                    linha_digitavel CHAR(54) NOT NULL,
                    valor CHAR(10),
                    vencimento DATE,
                    PRIMARY KEY (id));`;

      conn.execute(sql, function (err, results, fields) {
        if (err) {
          console.log("ERRO - Nao foi possivel criar a tabela BOLETOS");
        }
        console.log("TABELA BOLETOS - CRIADA");
        resolve("TABELA BOLETOS - CRIADA");
      });
    } catch (error) {
      console.log("TABELA BOLETOS - NAO CRIADA");
      reject(false);
    }
  });
};
