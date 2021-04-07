let contador = 1;
while (contador <= 10) {
  console.log(`contador = ${contador}`);
  contador++;
}

for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`);
}

const notas = [6.7, 8.1, 5.7, 9.4, 6.5];
for (let i = 0; i < notas.length; i++) {
  console.log(`notas = ${notas[i]}`);
}

console.log("----------------------");

const notas2 = [6.7, 8.1, 5.7, 9.4, 6.5];

for (let j in notas2) {
  console.log(j, notas[j]);
}

const pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 29,
  peso: 64,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
