const { expect } = require("@jest/globals");
const request = require("supertest");

const app = require("../../src/config/app");

test("Deve responder na raiz", () => {
  return request(app)
    .get("/health")
    .then((res) => {
      expect(res.body.status).toBe("Success");
      expect(res.status).toBe(200);
    });
});
