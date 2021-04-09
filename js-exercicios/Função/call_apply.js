function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}
const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco,
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco()); //retornará NaN pois preco e nome nao estao definidos, definindo os valores global. ali em cima, o this acessa
console.log(produto.getPreco()); //exatamente o valor que passou

const carro = {
  preco: 49990,
  desc: 0.2,
};

console.log(getPreco.call(carro)); //essas duas são iguais.
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, "$")); //os param sao o contexto, e os parametros necessários;

console.log(getPreco.apply(global, [0.17, "$"])); //apply tem que ser passado por array.
