const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

//DESAFIO: retornar apenas todos os alunos são bolsistas? (TRUE OR FALSE)

const todosBolsistas = alunos
  .map((e) => e.bolsista)
  .reduce(function (anterior, atual) {
    if (anterior == true && atual == true) {
      return true;
    } else {
      return false;
    }
  });

console.log(todosBolsistas);

//DESAFIO: algum aluno é bolsista? (TRUE OR FALSE)

const temBolsista = alunos
  .map((e) => e.bolsista)
  .reduce(function (anterior, atual) {
    if (anterior == true || atual == true) {
      return true;
    } else {
      return false;
    }
  });

console.log(temBolsista);
