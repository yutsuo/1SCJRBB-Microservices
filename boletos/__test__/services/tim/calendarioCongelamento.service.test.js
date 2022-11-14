const request = require("supertest");
const app = require("../../../src/config/app");
const { intercept_op4797538v1 } = require("../../intercepts/op4797538v1");

const calendarioCongelamentoService = require("../../../src/tim/services/calendarioCongelamento.service");

describe("Testando a consulta ao calendario de congelamento", () => {
  beforeAll(async () => {});

  afterAll(async (done) => {
    done();
  });

  it("deve retornar todos os dados de congelamento quando não informo o timestampCongelamento", async (done) => {
    intercept_op4797538v1();
    const calendario = await calendarioCongelamentoService.calendarioCongelamentoPorTimestamp(null);

    expect(calendario).toHaveProperty("codigoRetornoPrograma");
    expect(calendario).toHaveProperty("textoRetornoPrograma");
    expect(calendario).toHaveProperty("quantidadeLinha");
    expect(calendario).toHaveProperty("listaFixacao");

    done();
  });
});
