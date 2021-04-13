console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); //undefined

aprovados[3] = "Paulo";
console.log(aprovados[3]);
aprovados.push("Abia"); //mais apropriado para add um elemento
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
console.log(aprovados[8] === null);
console.log(aprovados);

aprovados.sort(); //altera o array ordem alfabética
console.log(aprovados);

delete aprovados[1]; //simplesmente coloca undefined no array, não altera
console.log(aprovados[1], aprovados[2]);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 1); //começa do indice 1, deleta 1
console.log(aprovados);

aprovados.splice(1, 0, "Eleento1", "Elemento2"); //do indice 1, não exclui nada, e add esses elementos
console.log(aprovados);
