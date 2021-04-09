function criarProduto(produto, preco) {
  return {
    nome: produto,
    preco: "R$ " + preco,
    desconto: 0.1,
  };
}

const prod1 = criarProduto("iPhone", 4189.9);
const prod2 = criarProduto("MacBook Air", 11189.9);
console.log(prod1);
console.log(prod2);
