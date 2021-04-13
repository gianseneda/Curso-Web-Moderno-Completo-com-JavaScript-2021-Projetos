const carrinho = [
  '{"nome":"Borracha", "preco": 3.45}',
  '{"nome":"Caderno", "preco": 13.90}',
  '{"nome":"Kit de Lápis", "preco": 41.22}',
  '{"nome":"Caneta", "preco": 7.50}',
]; //JSONs

//RETORNAR UM ARRAY APENAS COM OS PREÇOS

const paraObjeto = (json) => JSON.parse(json); //transforma JSON em objeto

const retornaValor = (produto) => `R$: ${produto.preco}`.replace(".", ","); //retorna o atributo do objeto

let valores = carrinho.map(paraObjeto).map(retornaValor);

console.log(valores);
