const Usuario = require("./usuarios-modelo");
const { InvalidArgumentError, InternalServerError } = require("../erros");

const jwt = require("jsonwebtoken");

function criaTokenJWT(usuario) {
  const payload = {
    id: usuario.id,
  };

  const token = jwt.sign(payload, process.env.CHAVE_JWT);
  return token;
}

module.exports = {
  adiciona: async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
      const usuario = new Usuario({
        nome,
        email,
      });

      await usuario.adicionaSenha(senha);

      await usuario.adiciona();

      res.status(201).json();
    } catch (erro) {
      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  login: (req, res) => {
    
    console.log(req.body);

    const token = criaTokenJWT(req.user);
    res.set("Authorization", token);
    res.status(204).send();
  },

  lista: async (req, res) => {
    const usuarios = await Usuario.lista();
    res.json(usuarios);
  },
};
