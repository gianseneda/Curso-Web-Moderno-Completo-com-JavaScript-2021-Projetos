//com o DO WHILE, obrigatoriamente deve-se executar ao menos uma vez o bloco de repetição

function getInteiroAleatorioEntre (min,max){
    const valor = Math.random()*(max-min)+ min
    return Math.floor(valor)
}
let opcao = -1 //se aqui fosse -1 ele nem entraria no bloco

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while(opcao != -1) //estrutura depois do bloco

console.log('Até a próxima!')