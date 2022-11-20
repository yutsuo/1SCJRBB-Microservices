const request = require("request");
exports.autenticar = (token) => {
  return new Promise((resolve) => {
    const options = {
      method: "POST",
      url: `http://${process.env.HOST_AUTENTICADOR}/usuario/autenticar`,
      headers: {
        Authorization: token,
      },
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      response.statusCode === 200 ? resolve(200) : resolve(401);
    });
  });
};
