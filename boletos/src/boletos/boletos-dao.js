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
    let conn = await connection();
    try {
      let sql = `CREATE TABLE if not exists boletos (
                    id MEDIUMINT NOT NULL AUTO_INCREMENT,
                    linha_digitavel CHAR(54) NOT NULL,
                    beneficiario CHAR(255),
                    valor decimal(15,2),
                    vencimento DATE,

                    PRIMARY KEY (id));`;

      conn.execute(sql, function (err, results, fields) {
        if (err) {
          console.log(err);
          console.log("ERRO - Nao foi possivel criar a tabela BOLETOS");
        }
        console.log("TABELA BOLETOS - CRIADA");
        resolve("TABELA BOLETOS - CRIADA");
      });
    } catch (error) {
      console.log("TABELA BOLETOS - NAO CRIADA");
      reject(false);
    } finally {
      conn.end();
    }
  });
};

exports.insereBoleto = async (dadosBoleto) => {
  return new Promise(async (resolve, reject) => {
    let conn = await connection();
    try {
      let dtVenc = dadosBoleto.vencimento.split("-");
      dataVencimento = new Date(dtVenc[2], dtVenc[1] - 1, dtVenc[0]);

      let sql = `INSERT INTO boletos.boletos
      (linha_digitavel, beneficiario, valor, vencimento)
      VALUES(?, ?, ?, ?);`;

      conn.execute(
        sql,
        [dadosBoleto.linhaDigitavel, dadosBoleto.beneficiario, dadosBoleto.valor, dataVencimento],
        function (err, results, fields) {
          if (err) {
            reject(error);
          }

          resolve(results);
        }
      );
    } catch (error) {
      console.log("TABELA BOLETOS - NAO CRIADA");
      reject(error);
    } finally {
      conn.end();
    }
  });
};

exports.buscaTodosBoletos = () => {
  return new Promise(async (resolve, reject) => {
    let conn = await connection();
    try {
      let sql = `SELECT id, linha_digitavel, beneficiario, valor, vencimento
      FROM boletos.boletos;`;

      conn.execute(sql, function (err, results, fields) {
        if (err) {
          reject(error);
        }

        resolve(results);
      });
    } catch (error) {
      reject(error);
    } finally {
      conn.end();
    }
  });
};

exports.buscaBoletoPorId = (id) => {
  return new Promise(async (resolve, reject) => {
    let conn = await connection();
    try {
      let sql = `SELECT id, linha_digitavel, beneficiario, valor, vencimento
      FROM boletos.boletos
      WHERE id = ?`;

      conn.execute(sql, [id], function (err, results, fields) {
        if (err) {
          reject(error);
        }

        resolve(results);
      });
    } catch (error) {
      reject(error);
    } finally {
      conn.end();
    }
  });
};

exports.deletaBoletoPorId = (id) => {
  return new Promise(async (resolve, reject) => {
    let conn = await connection();
    try {
      let sql = `DELETE FROM boletos.boletos
      WHERE id=?;`;

      conn.execute(sql, [id], function (err, results, fields) {
        if (err) {
          reject(error);
        }

        resolve(results);
      });
    } catch (error) {
      reject(error);
    } finally {
      conn.end();
    }
  });
};
