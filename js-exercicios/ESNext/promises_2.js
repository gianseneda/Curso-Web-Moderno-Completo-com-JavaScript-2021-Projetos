let a = 1;
console.log(a); //normal

//quando criamos uma promessa

let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(["Ana", "Maria", "Ana", "Carlos"]); //promessa sempre gera um único valor, mas posso passar um objeto {x:2, y:4}
}); //promessa de que algo será executado e devolvido no futuro

console.log(typeof p); //é uma function antes de vc instanciar com o NEW

p.then((valor) => valor[0])
  .then((primeiro) => primeiro[0])
  .then((letra) => console.log(letra)); //o valor é o array, pois antes do then, a promessa era que o array retornasse e ENTÃO, ele passa a ser o parâmetro da próxima função
