// let e const
{
  var a = 2;
  let b = 3;
  console.log(b);
}

console.log(a); //consegue acessar
//console.log(b); // não consegue acessar

// Template String

const produto = "iPad";
console.log(`${produto} é caro!`);

// Destructuring

const [l, e, ...tras] = "Cod3r"; //o rest (...) sempre espera receber um array
console.log(l);
console.log(e);
console.log(tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: "Ana", idade: 9 };
console.log(i, nome);
