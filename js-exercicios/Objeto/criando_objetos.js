// usando a notação literal

const obj1 = {};
console.log(obj1);

//Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Funcoes contrutoras
function Produto(nome, preco, desconto) {
  this.nome = nome; //this faz com que a variável seja publica para ser acessada
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto);
  };
}

const p1 = new Produto("Caneta", 7.99, 0.15); //embora eu deva passar os parâmetros que a função construtora espera receber, elas não serão exibidas se eu tentar acessar, neste caso, apenas o nome por causa do THIS e a função getPrecoComDesconto
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//Funçao Factory

function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}
const f1 = criarFuncionario("Joao", 7890, 4);
const f2 = criarFuncionario("Maria", 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

//Object.creat
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}'); //transforma uma string em objeto
console.log(fromJSON.info);
