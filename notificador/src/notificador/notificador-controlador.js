const mensagemService = require("./services/mensagem.service");

module.exports = {
  enviaMensagemUsuario: async (req, res) => {
    try {
      if (!req.body.titulo) {
        throw new Error(
          "Necessário informar o título para o envio da mensagem"
        );
      }
      if (!req.body.texto) {
        throw new Error(
          "Necessário informar um texto para o envio da mensagem"
        );
      }

      let mensagem = await mensagemService.gerarMensagem(
        req.body.titulo,
        req.body.texto
      );

      let enviado = await mensagemService.enviarMensagem(
        mensagem,
        process.env.HOOK_USUARIOS
      );

      res.status(200).json(enviado);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  },
};
