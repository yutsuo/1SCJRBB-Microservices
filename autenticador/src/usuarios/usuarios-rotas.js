const usuariosControlador = require("./usuarios-controlador");
const middlewaresAutenticacao = require("./middlewares-autenticacao");

module.exports = (app) => {

      /**
     * @swagger
     *     paths:
     *       /usuario/login:
     *         post:
     *          tags:
     *            - "USUARIO"
     *          summary: Retorna o token para utilização pelo usuário
     *          parameters:
     *             - in: formData
     *               name: email
     *               schema:
     *                 type: string
     *                 example: 1
     *               description: email do usuário
     *             - in: formData
     *               name: senha
     *               schema:
     *                 type: string
     *               description: senha do usuário
     *
     *          responses:
     *             '204':
     *                description: No Header retorna o Token do usuário
     *             '401':
     *                description: Não autorizado
     *
     */
  app.route("/usuario/login").post(middlewaresAutenticacao.local, usuariosControlador.login);

  /**
   * @swagger
   *     paths:
   *       /usuario/autenticar:
   *         post:
   *          tags:
   *            - "USUARIO"
   *          summary: Autentica um usuário
   *          parameters:
   *             - in: header
   *               name: authorization
   *               schema:
   *                 type: Bearer token
   *               description: Bearer token
   *          responses:
   *             '200':
   *                description: Autorizado
   *             '401':
   *                description: Não autorizado
   *
   */
  app.route("/usuario/autenticar").post(middlewaresAutenticacao.bearer, usuariosControlador.autenticar);

  app
    .route("/usuario")
    /**
     * @swagger
     *     paths:
     *       /usuario:
     *         post:
     *          tags:
     *            - "USUARIO"
     *          summary: Cadastra um novo usuário
     *          parameters:
     *             - in: body
     *               name: nome
     *               schema:
     *                 type: object
     *                 example: {"nome": "pedro oliveira","email": "pedro@teste.com","senha": "aaaaaaa51551"}
     *               description: objeto com os dados do usuário a serem cadastrados
     *          responses:
     *             '201':
     *                description: Criado o usuário
     *             '422':
     *                description: Objeto inválido
     */
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
     *             - in: query
     *               name: id
     *               schema:
     *                 type: number
     *                 example: 1
     *               description: id do usuário - se não informado retorna todos os usuários
     *             - in: header
     *               name: authorization
     *               schema:
     *                 type: Bearer token
     *               description: Bearer token
     *
     *          responses:
     *             '200':
     *                description: array com os dados dos usuarios
     *                content:
     *                  application/json
     *                schema:
     *                  type: Array
     *                  example: [{"id": 1,"nome": "pedro","email": "pedro@bb.com.br"}]
     *             '401':
     *                description: Não autorizado
     *
     */
    .get(middlewaresAutenticacao.bearer, usuariosControlador.lista);
};
