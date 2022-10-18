const request = require("supertest");
const app = require("../../../src/config/app");

const { intercept_op6237303v1 } = require("../../intercepts/op6237303v1");

const detalhaAvaliacaoQualidadeTimService = require("../../../src/ath/services/avaliacaoQualidadePacoteTIM.service");

describe("Testando a consulta ao calendario de congelamento", () => {
  beforeAll(async () => {});

  afterAll(async (done) => {
    done();
  });

  it("deve retornar todos os dados de congelamento quando não informo o timestampCongelamento", async (done) => {
    intercept_op6237303v1();
    const detalhamento = await detalhaAvaliacaoQualidadeTimService.detalhaAvaliacaoQualidadePacoteTim("VOJM10DPU820", "OPP");

    expect(detalhamento).toHaveProperty("indicadorIncremento");
    expect(detalhamento).toHaveProperty("indicadorQualidade");
    expect(detalhamento).toHaveProperty("codigoAlcadaMinimoPermitido");
    expect(detalhamento).toHaveProperty("textoIndicadorQualidade");
    expect(detalhamento).toHaveProperty("indicadorContinuidade");
    expect(detalhamento).toHaveProperty("quantidadeOcorrenciaTabela");
    expect(detalhamento).toHaveProperty("listaOcorrencia");
    done();
  });
});
