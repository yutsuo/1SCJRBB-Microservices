const { InvalidArgumentError } = require("./erros");

module.exports = {
  campoStringNaoNulo: (valor, nome) => {
    if (valor === 0 || typeof valor !== "string") throw new InvalidArgumentError(`É necessário preencher o campo ${nome}!`);
  },

  campoTamanhoMinimo: (valor, nome, minimo) => {
    if (valor.length < minimo) throw new InvalidArgumentError(`O campo ${nome} precisa ser maior que ${minimo} caracteres!`);
  },

  campoTamanhoMaximo: (valor, nome, maximo) => {
    if (valor.length > maximo) throw new InvalidArgumentError(`O campo ${nome} precisa ser menor que ${maximo} caracteres!`);
  },
};
