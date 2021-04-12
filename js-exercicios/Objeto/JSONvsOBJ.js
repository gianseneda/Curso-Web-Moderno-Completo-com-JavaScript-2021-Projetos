//JSON É UM FORMATO TEXTUAL QUE PODE SER INTERPRETADO POR DIVERSAS TECNOLOGIAS
const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};
console.log(JSON.stringify(obj)); //de obj para string

//console.log(JSON.parse("{a:1,b:2,c:3}")); retorna erro

// console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")); retorna erro

console.log(JSON.parse('{"a":1, "b":2, "c":3}')); //de txt para obj
console.log(
  JSON.parse('{"a": 1.7, "b": "string", "c": true, "d":{}, "e": []}')
); //aspas duplas para delimitar os atributos e simples para o objeto
