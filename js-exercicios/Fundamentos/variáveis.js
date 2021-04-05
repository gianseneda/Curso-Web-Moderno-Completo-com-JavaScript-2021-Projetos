var a = 3;
let b = 4; //crie variáveis usando LET, mais moderno, ECMA 15

var a = 30;
b = 40;

console.log(a,b)

/*SyntaxError: Identifier 'b' has already been declared*/

//LET eu não posso redeclarar dentro de um mesmo escopo, enquanto VAR eu posso.

a = 300;
b = 400;

console.log(a,b)

const c = 5
//c = 50 - não pode redeclarar
console.log(c)
