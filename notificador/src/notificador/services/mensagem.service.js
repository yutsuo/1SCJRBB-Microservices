const request = require("request");
const logger = require("../../util/logger");

exports.gerarMensagem= async (titulo, texto) => {
  let mensagem = {
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
          type: "AdaptiveCard",
          version: "1.4",
          body: [
            {
              type: "TextBlock",
              size: "Medium",
              weight: "Bolder",
              text: `${titulo}`,
              wrap: true,
              color: "Attention",
            },
            {
              type: "TextBlock",
              text: `${texto}`,
              wrap: true,
            },
          ],
          actions: [],
        },
      },
    ],
  };

  return mensagem;
};

exports.enviarMensagem = async (mensagem, hook) => {
  return new Promise(async (resolve) => {
    let retorno = { status: null, mensagem: "" };

    if (!hook) {
      hook = process.env.HOOK_CHANGEMAN;
    }

    const options = {
      method: "POST",
      url: hook,
      headers: { "content-type": "application/json" },
      body: mensagem,
      json: true,
    };

    request.defaults({ proxy: process.env.http_proxy });

    request(options, function (error, response) {
      if (error) {
        logger.logger.error(error);
        retorno.status = 500;
        retorno.mensagem = "Não foi possível enviar a mensagem";
      } else {
        retorno.status = response.statusCode;
        if (response.statusCode === 200) {
          retorno.mensagem = "Enviado com sucesso";
        } else {
          retorno.mensagem = "Não foi possível enviar a mensagem";
        }
      }
      resolve(retorno);
    });
  });
};
