const contadorA = require("./instacia_unica"); //valor 1
const contadorB = require("./instacia_unica");

const contadorC = require("./instancia_nova")(); //pois este módulo invoca uma função
const contadorD = require("./instancia_nova")();

contadorA.inc(); //valor 2
contadorA.inc(); //valor 3
console.log(contadorB.valor, contadorA.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorD.valor, contadorC.valor);
