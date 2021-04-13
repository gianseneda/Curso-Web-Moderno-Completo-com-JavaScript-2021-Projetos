const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); //todas as chaves (nome idade peso)
console.log(Object.values(pessoa)); //todas as atribuicaos
console.log(Object.entries(pessoa)); //retorna array

Object.entries(pessoa).forEach(([chave, valor]) => {
  //destructuring
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false, //nao reescreve
  value: "01/01/2019",
});

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); //concatena os segundos objetos em diante no primeiro
console.log(obj);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
