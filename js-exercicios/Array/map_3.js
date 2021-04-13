//simulando o MAP
Array.prototype.map2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this)); //para retornar um array como o map faz
  }
  return newArray;
};

const carrinho = [
  '{"nome":"Borracha", "preco": 3.45}',
  '{"nome":"Caderno", "preco": 13.90}',
  '{"nome":"Kit de Lápis", "preco": 41.22}',
  '{"nome":"Caneta", "preco": 7.50}',
]; //JSONs

//RETORNAR UM ARRAY APENAS COM OS PREÇOS

const paraObjeto = (json) => JSON.parse(json); //transforma JSON em objeto

const retornaValor = (produto) => `R$: ${produto.preco}`.replace(".", ","); //retorna o atributo do objeto

let valores = carrinho.map2(paraObjeto).map2(retornaValor);

console.log(valores);
