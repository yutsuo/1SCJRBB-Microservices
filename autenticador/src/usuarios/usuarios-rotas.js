const usuariosControlador = require("./usuarios-controlador");
const middlewaresAutenticacao = require("./middlewares-autenticacao");

module.exports = (app) => {
  /**
   * @swagger
   *
   * paths:
   *   /usario/login:
   *     post:
   *       tags:
   *         - "USUARIO"
   *       summary: "Repassar endpoint para equipe do AIC/Selfie incluir no processo de criação de contexto do Grafeno"
   *       operationId: "gruposAnalise"
   *       consumes:
   *         - "application/json"
   *       produces:
   *         - "application/json"
        /usuario:
   *      get:
   *       tags:
   *         - "AIC"
   *       summary: "Repassar endpoint para equipe do AIC/Selfie incluir no processo de criação de contexto do Grafeno"
   *       operationId: "gruposAnalise"
   *       consumes:
   *         - "application/json"
   *       produces:
   *         - "application/json" 
   *
   */

  app.route("/usuario/login").post(middlewaresAutenticacao.local, usuariosControlador.login);

  app
    .route("/usuario")
    .post(usuariosControlador.adiciona)
    /**
     * @swagger
     *     paths:
     *       /usuario:
     *         get:
     *          tags:
     *            - "USUARIO"
     *          summary: Exibe usuarios cadastrados
     *          parameters:
     *             #- in: query
     *              # name: pacote
     *              # schema:
     *             #    type: string
     *             #  description: Numero do pacote TIM
     *          #   - in: query
     *           #    name: sigla
     *            #   schema:
     *            #     type: string
     *          #     description: Sigla responsável pelo pacote
     *          responses:
     *             '200':
     *                description: JSON com os dados dos usuarios
     *                content:
     *                  application/json:
     *                    schema:
     *                      type: object
     *                      properties:
     *                        username:
     *                          type: string
     */
    .get(middlewaresAutenticacao.bearer, usuariosControlador.lista);
};
