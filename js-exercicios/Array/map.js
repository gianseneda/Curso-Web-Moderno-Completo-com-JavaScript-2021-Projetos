const nums = [1, 2, 3, 4, 5];

//MAP - For com propósito, ele itera sobre todos os elementos mas ele espera uma callback com um método a retornar
let resultado = nums.map(function (e) {
  return e * 2; //e - elemento
});

console.log(resultado); //gerou um nome array
console.log(nums); //não altera o original

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);
