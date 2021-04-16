// Arrow function
const soma = (a, b) => a + b; //(parametros) function retorno
console.log(soma(2, 3));

// Arrow function
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// parametros default
function log(text = "Node") {
  console.log(text);
}
log();
log("Sou mais forte");

// operador rest (ou spread)
function total(...numeros) {
  //espera receber uma array com quantos numeros quiser
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}
console.log(total(2, 5, 3, 2, 5, 6));
