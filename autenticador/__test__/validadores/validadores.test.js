const validadoresComuns = require("../../src/validacoes-comuns");

describe("Testando os validadores", () => {
  beforeAll(async () => {});

  afterAll(async (done) => {
    done();
  });

  it("Campo com tamanho inferior ao mínimo", async (done) => {
    let retorno;

    try {
      retorno = validadoresComuns.campoTamanhoMinimo("A", "TESTE", 3);
    } catch (error) {
      console.log(error);

      retorno = error;
    }

    expect(retorno.toString()).toBe("InvalidArgumentError: O campo TESTE precisa ser maior que 3 caracteres!");
    done();
  });

  it("Campo com tamanho mínimo validado", async (done) => {
    let retorno;

    try {
      retorno = validadoresComuns.campoTamanhoMinimo("AAA", "TESTE", 3);
    } catch (error) {
      console.log(error);

      retorno = error;
    }

    expect(retorno).toBe(undefined);
    done();
  });

  //

  it("Campo com tamanho superior ao máximo", async (done) => {
    let retorno;

    try {
      retorno = validadoresComuns.campoTamanhoMaximo("AAAA", "TESTE", 3);
    } catch (error) {
      console.log(error);

      retorno = error;
    }

    expect(retorno.toString()).toBe("InvalidArgumentError: O campo TESTE precisa ser menor que 3 caracteres!");
    done();
  });

  it("Campo com tamanho maximo validado", async (done) => {
    let retorno;

    try {
      retorno = validadoresComuns.campoTamanhoMaximo("AAA", "TESTE", 4);
    } catch (error) {
      console.log(error);

      retorno = error;
    }

    expect(retorno).toBe(undefined);
    done();
  });
});
