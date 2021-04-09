//estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma1());
console.log(soma1(3));
console.log(soma1(3, 4));
console.log(soma1(1, 2, 3));
console.log(soma1(0, 0, 0)); //aqui o 0 retorna falso e ele pega o numero após o OU

//estratégia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1; //indice 1 do local de B no array de parametros
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

//valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));
