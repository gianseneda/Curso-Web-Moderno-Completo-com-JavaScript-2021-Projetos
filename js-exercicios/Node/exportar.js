console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports); //é sempre o module.exports que é exportado, não adianta atribuir novamente de outras formas como exports ou this

exports = {
  nome: "Teste",
};
