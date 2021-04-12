//Object.preventExtensions - não consegue add novos atributos nesse objeto
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "Promoção",
});

console.log("Extensível:", Object.isExtensible(produto));

produto.nome = "Borracha"; //deixa mudar
produto.descricao = "Borracha escolar branca"; //não deixa add
delete produto.tag; //deletar pode
console.log(produto);

//Object.seal = não add nem deletar
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva"; //nada acontece
delete pessoa.nome; //nada acontece
pessoa.idade = 29; //pode mudar

console.log(pessoa);

//Objeto.freeze = selado + valores constantes - não muda, não exclui, não add
