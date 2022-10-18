const request = require("supertest");
const app = require("../../../src/config/app");

const url = "/api-docs";

describe(url, () => {
  beforeAll(async () => {});

  afterAll(async (done) => {
    done();
  });

  it("a requisição deve retornar 301 redirecionando para o swagger", (done) => {
    request(app)
      .get(url)
      .send({})
      .end((err, response) => {
        expect(response.status).toBe(301);
        done();
      });
  });
});
