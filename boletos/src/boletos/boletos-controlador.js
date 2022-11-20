const boletosDAO = require("./boletos-dao");
const autenticarService = require("./services/autenticar.service");
const { InvalidArgumentError, InternalServerError } = require("../erros");

module.exports = {
  adiciona: async (req, res) => {
    try {
      if (!req.body.linhaDigitavel || !req.body.beneficiario || !req.body.valor || !req.body.vencimento) {
        res.status(422).json({ erro: "campos obrigatórios faltantes" });
      } else {
        const usuarioAutenticado = await autenticarService.autenticar(req.headers.authorization);
        if (usuarioAutenticado !== 200) {
          res.status(401).json({ erro: "Não autorizado" });
        } else {
          await boletosDAO.insereBoleto(req.body);

          res.status(201).json();
        }
      }
    } catch (erro) {
      console.log(erro);

      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  buscaBoletos: async (req, res) => {
    try {
      let retorno = null;
      const usuarioAutenticado = await autenticarService.autenticar(req.headers.authorization);
      if (usuarioAutenticado !== 200) {
        res.status(401).json({ erro: "Não autorizado" });
      } else {
        if (!req.query.id) {
          retorno = await boletosDAO.buscaTodosBoletos();
        } else {
          retorno = await boletosDAO.buscaBoletoPorId(req.query.id);
        }
        res.status(200).json(retorno).send();
      }
    } catch (erro) {
      console.log(erro);

      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  deletaBoleto: async (req, res) => {
    try {
      let retorno = null;

      const usuarioAutenticado = await autenticarService.autenticar(req.headers.authorization);
      if (usuarioAutenticado !== 200) {
        res.status(401).json({ erro: "Não autorizado" });
      } else {
        if (!req.body.id) {
          res.status(422).json({ erro: "Deve ser informado um id para deletar o boleto" });
        } else {
          retorno = await boletosDAO.deletaBoletoPorId(req.body.id);

          if (retorno) {
            if (retorno.affectedRows === 0) {
              res.status(422).json({ erro: "id não localizado" }).send();
            } else {
              res
                .status(200)
                .json({ message: `Excluído(s) ${retorno.affectedRows} registros` })
                .send();
            }
          }
        }
      }
    } catch (erro) {
      console.log(erro);
    }
  },
};
