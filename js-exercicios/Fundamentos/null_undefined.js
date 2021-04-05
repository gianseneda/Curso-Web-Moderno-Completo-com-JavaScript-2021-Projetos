let valor //não inicializada
console.log(valor) //undefined

valor = null //ausência de valor, mas ela está inicializada

console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined //evite fazer isso

console.log(produto.preco)

produto.preco = null //o produto está sem preço

console.log(produto.preco)
