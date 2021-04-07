//usamos o WHILE pra quando precisarmos de uma quantidade inderteminada de repetiçÕes

function getInteiroAleatorioEntre (min,max){
    const valor = Math.random()*(max-min)+ min
    return Math.floor(valor)
}
let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')