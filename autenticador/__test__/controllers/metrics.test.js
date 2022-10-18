const request = require("supertest");

const app = require("../../src/config/app");

test("Deve responder na raiz", () => {
  return request(app)
    .get("/metrics")
    .then((res) => {
      expect(res.status).toBe(200);
    });
});
