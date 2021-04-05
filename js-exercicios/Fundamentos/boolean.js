//QUANDO EU TENHO !! EU FORÇO UMA SENTENÇA A RETORNAR TRUE OU FALSE, É UMA NEGAÇÃO DA NEGAÇÃO, OU UMA AFIRMAÇÃO.

let isAtivo = true;

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"texto")
console.log(!![])
console.log(!![])
console.log(!!Infinity)//numero infinito
console.log(!!(isAtivo = 33))//olha o valor da atribuição, e nã se a atribuição deu certo ou não

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))//olha o valor da atribuição, e nã se a atribuição deu certo ou não
