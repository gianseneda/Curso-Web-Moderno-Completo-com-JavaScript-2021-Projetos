const alunos = [
  { nome: "Joao", nota: 7.9 },
  { nome: "Maria", nota: 9.2 },
];

//Imperativo - como tem que ser feito é mais importante que o que
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}

console.log(total1 / alunos.length);

//Declarativo - tendar desta forma, menos verboso, o que fazer é mais importante que o COMO
const getNota = (aluno) => aluno.nota; //volto só a nota ao chamar o MAP
const soma = (total, atual) => total + atual; //com as notas, eu somo uma ca outra
const total2 = alunos.map(getNota).reduce(soma);

console.log(total2 / alunos.length);

//select codigo, nome, email from clientes where ativo = 1 - comando SQL - linguagem declarativa, preocupada com o QUE VC QUER
