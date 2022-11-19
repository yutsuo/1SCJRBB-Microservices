const notificadorControlador = require("./notificador-controlador");

module.exports = (app) => {
  const baseURL = "/api/notificador/v1";
  /**
   * @swagger
   *     paths:
   *       /notificador/v1/notificarErro:
   *         post:
   *          tags:
   *            - "NOTIFICADOR"
   *          summary: Envia uma notificação  de erro no MS Teams para o grupo changeman
   *          parameters:
   *             - in: body
   *               name: titulo
   *               schema:
   *                 type: string
   *                 example: Erro - Janela de implantação
   *               description: numero da reuniao
   *             - in: body
   *               name: desc1
   *               schema:
   *                 type: string
   *                 example: Componente não possui janela cadastrada
   *               description: Primeiro campo de texto da descrição do erro
   *             - in: body
   *               name: desc2
   *               schema:
   *                 type: string
   *                 example: Componente não possui janela cadastrada
   *               description: Segundo campo de texto para descrição do erro
   *             - in: body
   *               name: desc3
   *               schema:
   *                 type: string
   *                 example: Componente não possui janela cadastrada
   *               description: Terceiro campo de texto da descrição do erro
   *          responses:
   *             '200':
   *                description: JSON obeject informando o envio da mensagem
   *                content:
   *                  application/json
   *                schema:
   *                  type: object
   *                  example: {mensagem : "Enviado com sucesso"}
   *             '500':
   *                description: JSON obeject com a mensagem do erro
   *                content:
   *                  application/json
   *                schema:
   *                  type: object
   *                  example: {mensagem : "Não foi possível enviar a mensagem"}
   *
   */
  app.route(`${baseURL}/notificar-cadastro-usuario`).post(notificadorControlador.enviaMensagemUsuario);
};
