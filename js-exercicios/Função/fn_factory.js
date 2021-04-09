// retorna um objeto, quase igual uma funcao construtora
//Factory Simples

function criarPessoa() {
  return {
    nome: "Ana",
    sobrenome: "Silva",
  };
}

console.log(criarPessoa());

console.log("-----------------");

function criarProduto(nome, sobrenome) {
  return {
    //chaves pra retornar objeto
    nome: nome,
    sobrenome: sobrenome,
    desconto: 0.1,
  };
}

console.log(criarProduto("Notebook", 2199, 49));
console.log(criarProduto("iPad", 1199, 49));
