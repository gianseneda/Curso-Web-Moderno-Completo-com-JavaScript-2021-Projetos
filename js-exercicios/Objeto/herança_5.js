console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
  return this.split("").reverse().join(""); //separo a string caractere por caracter "", reverto a ordem de trás pra frente e junto tudo de novo com o mesmo sentido
};
console.log("Escola Cod3r".reverse());

Array.prototype.first = function () {
  return this[0];
};

console.log([1, 2, 3, 4, 5].first());
console.log(["a", "b", "c"].first());

String.prototype.toString = function () {
  //substituindo uma funcao que já existe, não faça isso
  return "Lascou tudo";
};

console.log("Escola Cod3r".reverse());
