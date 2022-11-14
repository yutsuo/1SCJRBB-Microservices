const request = require("supertest");
const app = require("../../../src/config/app");

const url = "/api/ath/v1/avaliacao-qualidade-pacote";

describe(url, () => {
  beforeAll(async () => {});

  afterAll(async (done) => {
    done();
  });

  it("a requisição deve retornar 401 caso não seje informado um token valido", (done) => {
    request(app)
      .get(url)
      .send({})
      .expect(200)
      .end((err, response) => {
        expect(response.status).toBe(401);
        done();
      });
  });
});
