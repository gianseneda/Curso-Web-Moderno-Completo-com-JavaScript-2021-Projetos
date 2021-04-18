function funcionarOuNao(valor, chanceDeErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceDeErro) {
      reject("Ocorreu um erro");
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao("testando...", 0.5)
  .then((v) => console.log(`Valor: ${v}`))
  .catch((err) => console.log(`Erro: ${err}`))
  .then(() => console.log("Fim!")); //chanceDeErro de 0 - 1.0 de %
//o catch trata o erro, ao inves de mostrar um erro grande, ele entra no catch que recebe o erro do sistema e devolve o que vc quis escrever
