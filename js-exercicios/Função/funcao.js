// função em JS é FIRST CLASS OBJECT (citizen)
//higher order function
//voce pode tratar função como dado, parâmetro...

//criar de forma literal
function fun1() {}

//armazenar em uma variável

const fun2 = function () {};

//Armazenar dentro de um array

const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

console.log(array[0](2, 3));

//Armazenar em um atriuto de objeto
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

//Passar uma funcao como parametro

function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

//Uma funcao pode retornar/conter uma funcao
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4); //passando o parmetro da primeira e da segunda função

const cincoMais = soma(2, 3);
cincoMais(4); //mesma forma da de cima
