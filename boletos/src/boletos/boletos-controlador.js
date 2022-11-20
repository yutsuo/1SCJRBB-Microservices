const boletosDAO = require("./boletos-dao");

module.exports = {
  adiciona: async (req, res) => {
    try {
      if (!req.body.linhaDigitavel || !req.body.beneficiario || !req.body.valor || !req.body.vencimento) {
        res.status(422).json({ erro: "campos obrigatórios faltantes" });
      }

      await boletosDAO.insereBoleto(req.body);

      res.status(201).json();
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
};
