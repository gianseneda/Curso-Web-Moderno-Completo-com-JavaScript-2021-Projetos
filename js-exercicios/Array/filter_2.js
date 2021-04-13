Array.prototype.filter2 = function (callback) {
  const newArray = []; //se tá vazio com const, devo add com push
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      //isso é o que espera a função que a filter recebe
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter2(function (p) {
    return p.preco > 2000 && p.fragil == true; //o que retorna TRUE é o que vai pro novo array do filter
  })
);
