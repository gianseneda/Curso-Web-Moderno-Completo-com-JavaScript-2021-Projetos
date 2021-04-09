const pessoa = {
  saudacao: "Bom Dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); //conflito entre paradigmas: funcional e o.o

const falarDePessoa = pessoa.falar.bind(pessoa); //sempre o this será orientado à PESSOA
falarDePessoa();

console.log("--------------------");

function Pessoa() {
  this.idade = 0;

  const self = this;
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/,
    1000
  );
} //o interval que chama a função, e por isso, o THIS não apontará apara Pessoa

//com o bind, dará certo, OU use self (_this)

new Pessoa();
