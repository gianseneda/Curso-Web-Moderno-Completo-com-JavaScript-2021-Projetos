// pessoa -> 123 -> {...} constante que aponta para um endereco que aponta para o objeto
const pessoa = { nome: "Joao" };
pessoa.nome = "Pedro";
console.log(pessoa);
//pessoa <- 456 -> {...} mudando endereço, mas por ser constante, isso gerará um problema, pois vc está colocando um novo endereço
//  pessoa = {nome: 'Ana'}

Object.freeze(pessoa); //congelando o objeto pessoa, não pode mais mexer no obj

pessoa.nome = "Maria";
console.log(pessoa.nome); //continua a ser Pedro
pessoa.end = "Rua ABC"; //não aceita
delete pessoa.nome; //não exclui

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "João" });
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);
