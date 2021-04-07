//sentenciação do código é feita de cima pra baixo, mas com VAR isso pode mudar

console.log('a = ', a)
var a = 2;
console.log('a = ', a)

//ele HOIST (iça) a variável VAR para cima e não dá erro de mostrar A antes de declarar

console.log('b = ', b) //isso aqui, com LET, vai gerar ERRO!
let b = 3;
console.log('b = ', b)