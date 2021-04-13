const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //massa quebrou o carro, tira o último elemento
console.log(pilotos);

pilotos.push("Verstappen");
console.log(pilotos);

pilotos.shift(); //remove o da primeira posição
console.log(pilotos);

pilotos.unshift("Hamilton"); //adiciona um elemento no incicio
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "Bottas", "Massa"); //a partir do indice 2, num deleta nenhum, add Bottas e Massa
console.log(pilotos);

//remover
pilotos.splice(3, 1); //massa quebrou :(
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); //cria um novo array a partir do indice 2
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4); //inclui o indice 1 mas não o 4
console.log(algunsPilotos2);
