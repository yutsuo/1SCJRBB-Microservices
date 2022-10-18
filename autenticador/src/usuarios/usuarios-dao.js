const { Client } = require("pg");
const { InternalServerError } = require("../erros");

const getClient = async () => {
  return new Client({
    host: process.env.HOST_PG,
    user: process.env.USER_PG,
    port: process.env.PORTA_PG,
    database: process.env.DATABASE_PG,
    password: process.env.PASSWORD_PG,
    ssl: false,
  });
};

module.exports = {
  adiciona: async (usuario) => {
    return new Promise(async (resolve, reject) => {
      try {
        const client = await getClient();
        client.connect();

        const text = "INSERT INTO w_usuarios (nome, email, senhaHash) VALUES ($1, $2, $3)";
        const values = [usuario.nome, usuario.email, usuario.senhaHash];

        try {
          await client.query(text, values);

          client.end();
        } catch (err) {
          console.log(err.stack);
          client.end();
        }
      } catch (error) {
        console.log(error);

        reject(new InternalServerError("Erro ao adicionar o usuário!"));
      }
    });
  },

  buscaPorId: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const client = await getClient();
        client.connect();

        const text = "SELECT * from w_usuarios where id = $1";
        const values = [id];

        client.query(text, values, (err, res) => {
          if (err) {
            console.log(err.stack);
          } else {
            resolve(res.rows[0]);
          }
        });
      } catch (error) {
        console.log(error);
        reject(new InternalServerError("Erro na busca do usuário"));
      }
    });
  },

  buscaPorEmail: (email) => {
    return new Promise(async (resolve, reject) => {
      try {
        const client = await getClient();
        client.connect();

        const text = "SELECT * from w_usuarios WHERE email = $1";
        const values = [email];

        client.query(text, values, (err, res) => {
          if (err) {
            console.log(err.stack);
          } else {
            resolve(res.rows[0]);
          }
        });
      } catch (error) {
        console.log(error);
        reject(new InternalServerError("Erro na busca do usuário"));
      }
    });
  },

  lista: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const client = await getClient();
        client.connect();

        const text = "SELECT * from w_usuarios";

        try {
          const res = await client.query(text);
          console.log(res.rows[0]);
          resolve(res.rows);
        } catch (err) {
          console.log(err.stack);
        }
      } catch (error) {
        console.log(error);
        reject(new InternalServerError("Erro na busca do usuário"));
      }
    });
  },

};
