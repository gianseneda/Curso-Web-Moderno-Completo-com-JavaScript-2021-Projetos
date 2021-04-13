//essa classe é o que o cliente acessaria

const moduloA = require("./módulo_A"); //arquivos dentro do projeto são acessados com ./
const moduloB = require("./módulo_B");

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);
