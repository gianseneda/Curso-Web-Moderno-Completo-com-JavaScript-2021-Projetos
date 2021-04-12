function Aula(nome, videoID) {
  this.nome = nome;
  this.video = videoID;
}
const aula1 = new Aula("Bem Vindo", 123);
const aula2 = new Aula("Até Breve!", 456);
console.log(aula1, aula2);

//simulando o NEW
function novo(f, ...params) {
  //operador spread rest - concatena numa array
  const obj = {}; //cria um objeto novo com notação literal
  obj.__proto__ = f.prototype; //associo o prototype desse objeto ao prototype da funcao que passarei de paramentro, no caso será AULA
  f.apply(obj, params); //executa a funcao e passará o obj para usar o this, e os parametros pra gente atribuir
  return obj;
}

const aula3 = novo(Aula, "Bem Vindo", 123);
const aula4 = novo(Aula, "Até Breve", 456);

console.log(aula3, aula4);
