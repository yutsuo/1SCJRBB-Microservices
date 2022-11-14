const nock = require("nock");

exports.intercept_op6237303v1 = () => {
  const body = {
    codigoIdentificadorParticipante: "VOJM10DPU820",
    siglaSistema: "OPP",
    numeroUltimoRegistro: "0",
  };

  process.env.APP_INTEGRACAO_URL = "http://appintegracao.ath.desenv.bb.com.br/";

  console.log("Chamaeii o intercept");

  nock(process.env.APP_INTEGRACAO_URL)
    .post("/consumer/op6237303v1", body)
    .reply(200, {
      content: {
        indicadorIncremento: "",
        indicadorQualidade: "",
        codigoAlcadaMinimoPermitido: "",
        textoIndicadorQualidade: "",
        indicadorContinuidade: "",
        quantidadeOcorrenciaTabela: 12,
        listaOcorrencia: [
          {
            codigoItemAvaliado: 1,
            textoItemAvaliado: "VIOLAÇÃO DBIQ",
            valorApuradoParticipante: "0100",
            valorEsperadoParticipante: "0100",
          },
          {
            codigoItemAvaliado: 2,
            textoItemAvaliado: "VIOLAÇÃO DISPLAY/WRITEQ TD/CEEMOUT",
            valorApuradoParticipante: "0100",
            valorEsperadoParticipante: "0100",
          },
          {
            codigoItemAvaliado: 3,
            textoItemAvaliado: "DB2 EXECUTADO EM HM",
            valorApuradoParticipante: "0888",
            valorEsperadoParticipante: "0050",
          },
          {
            codigoItemAvaliado: 4,
            textoItemAvaliado: "EXECUTADO TST AUTOMATIZADO",
            valorApuradoParticipante: "0066",
            valorEsperadoParticipante: "0055",
          },
          {
            codigoItemAvaliado: 9,
            textoItemAvaliado: "COBERTURA CODIGO COBOL TST AUTOMATIZADO",
            valorApuradoParticipante: "0049",
            valorEsperadoParticipante: "0030",
          },
          {
            codigoItemAvaliado: 11,
            textoItemAvaliado: "COBERTURA CODIGO COBOL NOVO",
            valorApuradoParticipante: "0091",
            valorEsperadoParticipante: "0070",
          },
          {
            codigoItemAvaliado: 12,
            textoItemAvaliado: "EFETIVIDADE DOS TESTES",
            valorApuradoParticipante: "0777",
            valorEsperadoParticipante: "0000",
          },
          {
            codigoItemAvaliado: 13,
            textoItemAvaliado: "SIMULACAO BIND EM PRODUCAO",
            valorApuradoParticipante: "0100",
            valorEsperadoParticipante: "0000",
          },
          {
            codigoItemAvaliado: 14,
            textoItemAvaliado: "MATURIDADE DO MODELO DE DADOS",
            valorApuradoParticipante: "0999",
            valorEsperadoParticipante: "0000",
          },
          {
            codigoItemAvaliado: 16448,
            textoItemAvaliado: "",
            valorApuradoParticipante: "",
            valorEsperadoParticipante: "",
          },
          {
            codigoItemAvaliado: 16448,
            textoItemAvaliado: "",
            valorApuradoParticipante: "",
            valorEsperadoParticipante: "",
          },
          {
            codigoItemAvaliado: 16448,
            textoItemAvaliado: "",
            valorApuradoParticipante: "",
            valorEsperadoParticipante: "",
          },
        ],
      },
      status: 200,
    });
};
