const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`);
  console.log(array);
}); //para cada novo elemento, chama uma callback passando o elemento do indice

aprovados.forEach((nome) => console.log(nome)); //mesma lógica de cima mas sem imprimir os índices neste caso (o forEach espera que 3 parametros (nome e indice e array) sejam passados, mas não há necessidade de inserir todos eles)

const exibirAprovados = (aprovados) => console.log(aprovados); //fn
aprovados.forEach(exibirAprovados);
