const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter(function (p) {
    return p.preco > 2000 && p.fragil == true; //o que retorna TRUE é o que vai pro novo array do filter
  })
); //retorna uma array com os elementos que passam por um filtro
