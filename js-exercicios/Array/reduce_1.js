//reduce itera de 2 em 2 elementos e realiza uma função, isso é acumulado para iterar sobre o próximo elemento
const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

const resultado = alunos
  .map((a) => a.nota) //retorna apenas notas
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual); //passo a passo
    return acumulador + atual;
  }, 0 /*poderia passar um valor inicial aqui*/); //el. anterior e el. atual, ele espera receber isso já

console.log(resultado);
