//armazenando ma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a+b)
}
imprimirSoma(2,3)

//armazenando em uma funcao arrow em uma variável

const soma = (a,b) => {
    return a+b
}

console.log(soma(2,3))

//retorno implicito

const subtracao = (a, b) => a-b

console.log(subtracao(2,3))