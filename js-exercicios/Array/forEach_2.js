const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

for (let i = 0; i < aprovados.length; i++) {
  console.log(`${i + 1}: ${aprovados[i]}`);
}

//simular o forEach

Array.prototype.forEach2 = function (callback) {
  //cria uma funcao no prototype de array para que forEach2 procure em seu pai essa atribuição
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this); //valor, índice e array completo
  }
};
const aprovados2 = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados2.forEach2((nome, indice) => {
  console.log(`${indice + 1}) ${nome}`);
});
