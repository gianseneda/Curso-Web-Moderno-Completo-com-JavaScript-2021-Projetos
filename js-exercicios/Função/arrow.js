//função arrow é sempre anonima

let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

dobro = (a) => 2 * a; //nem precisa do (), o prettier que colocou. - return implícito

console.log(dobro(Math.PI));

let ola = function () {
  return "Olá";
};

ola = () => "Olá"; //sem parâmetro

console.log(ola());

console.log("--------------");

function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
} //no contexto de uma arrow function, o this não muda de escopo

new Pessoa();

console.log("---------------");

let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global); //para o Browser é WINDOW

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj); //dentro de uma arrow, ISSO NÃO FUNCIONA
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);
