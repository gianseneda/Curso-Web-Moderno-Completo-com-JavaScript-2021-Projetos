console.log(this === global); //aponta pra module.exports
console.log(this === module);
console.log(this === module.exports);
console.log(this === exports);

function logThis() {
  console.log("Dentro de uma função...");
  console.log(this === exports); //dentro da funcao, ele não aponta pra exports, só fora
  console.log(this === module.exports);
  console.log(this === global); //aponta pra ca

  this.perigo = "..."; //escopo global
}

this.perigo = "..."; //module.exports

logThis();
