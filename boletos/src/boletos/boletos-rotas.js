const boletosControlador = require("./boletos-controlador");

module.exports = (app) => {
  app
    .route("/boletos")
    /**
     * @swagger
     *     paths:
     *       /boletos:
     *         post:
     *          tags:
     *            - "BOLETO"
     *          summary: Adiciona um boleto
     *          parameters:
     *             - in: body
     *               name:
     *               schema:
     *                 type: object
     *                 example: {"linhaDigitavel": "2335465465.1651116.1616161","beneficiario": "pedro","valor": "5.75","vencimento": "15-06-1990"}
     *               description: objeto com os dados do boleto
     *             - in: header
     *               name: authorization
     *               schema:
     *                 type: Bearer token
     *               description: Bearer token
     *          responses:
     *             '201':
     *                description: Adicionado o Boleto
     *             '401':
     *                description: Não autorizado
     *             '422':
     *                description: Objeto inválido
     */
    .post(boletosControlador.adiciona)
    /**
     * @swagger
     *     paths:
     *       /boletos:
     *         get:
     *          tags:
     *            - "BOLETO"
     *          summary: Busca boleto
     *          parameters:
     *             - in: query
     *               name: id
     *               schema:
     *                 type: number
     *                 example: 1
     *               description: Id do boleto, se não informado retorna todos os boletos
     *             - in: header
     *               name: authorization
     *               schema:
     *                 type: Bearer token
     *               description: Bearer token
     *          responses:
     *             '200':
     *                description: array com os dados dos boletos
     *                content:
     *                  application/json
     *                schema:
     *                  type: Array
     *                  example: [{"id": 11,"linha_digitavel": "2335465465.1651116.1616161","beneficiario": "pedro","valor": "5.75","vencimento": "1990-06-15T03:00:00.000Z"}]
     *             '401':
     *                description: Não autorizado
     *             '422':
     *                description: Objeto inválido
     */
    .get(boletosControlador.buscaBoletos)
    /**
     * @swagger
     *     paths:
     *       /boletos:
     *         delete:
     *          tags:
     *            - "BOLETO"
     *          summary: Deleta um boleto
     *          parameters:
     *             - in: body
     *               name: id
     *               schema:
     *                 type: number
     *                 example: {"id": 1}
     *               description: Id do boleto, se não informado retorna todos os boletos
     *             - in: header
     *               name: authorization
     *               schema:
     *                 type: Bearer token
     *               description: Bearer token
     *          responses:
     *             '200':
     *                description: array com os dados dos boletos
     *                content:
     *                  application/json
     *                schema:
     *                  type: object
     *                  example: {"message": "Excluído(s) 1 registros"}
     *             '401':
     *                description: Não autorizado
     *             '422':
     *                description: Objeto inválido
     */
    .delete(boletosControlador.deletaBoleto);
};
