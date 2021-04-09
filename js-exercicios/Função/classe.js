//Também instancia objetos como função construtoras - uma outra forma de função
class Pessoa {
  constructor(nome) {
    this.nome = nome; //deixo ela publica pra eu usar na função, que é outro escopo
  }

  falar() {
    console.log(`Meu nome é ${this.nome}!`);
  }
}

const p1 = new Pessoa("Joao");
p1.falar();

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}!`),
  };
};

const p2 = criarPessoa("José");
p2.falar();
