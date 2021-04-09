//Basicamente, callback é um tipo de função que só é executada após o processamento de outra função. Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada de callback.

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); //funcao de um array - pra cada elemento que ele encontrar (forEach, ele chama a funcao)

fabricantes.forEach(function (fabricante) {
  console.log(fabricante);
});

console.log("-------------------");

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//sem callback

const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}
console.log(notasBaixas1);

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
}); //função callback, tipo forEach

console.log(notasBaixas2);

const notasBaixas3 = notas.filter((nota) => nota < 7);

console.log(notasBaixas3);
