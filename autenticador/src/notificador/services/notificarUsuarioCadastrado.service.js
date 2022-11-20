const request = require("request");
exports.notificar = (titulo, texto) => {
  const options = {
    method: "POST",
    url: `http://${process.env.HOST_NOTIFICADOR}/api/notificador/v1/notificar-cadastro-usuario`,
    headers: { "Content-Type": "application/json" },
    body: { titulo: titulo, texto: texto },
    json: true,
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
};
