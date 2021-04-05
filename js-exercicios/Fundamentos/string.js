const escola ="Cod3r"
console.log(escola.charAt(4));//letra da posicão 4 (começa no índice 0)
console.log(escola.charAt(5));//não existe essa posição, ela retorna vazio

console.log(escola.charCodeAt(3))//valor da tabela UNICODE (código HTML)
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) //a partir do indice 1 para frente

console.log(escola.substring(0,3)) //não inclui o índice 3

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(',')) //transforma em array
