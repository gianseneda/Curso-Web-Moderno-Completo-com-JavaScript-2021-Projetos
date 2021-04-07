const imprimirResultado = function(nota){
    if(nota >=7){
        console.log('Aprovado!')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') //cuidado, garanta que esse problema não aconteça

console.log('-----------------------')

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado2 = function (nota){
    if (nota.entre(9,10)){
        console.log('Quadro de honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else{
        console.log('Nota inválida')
    }

    console.log('Fim')
}

imprimirResultado2(10)
imprimirResultado2(8.9)
imprimirResultado2(6.55)
imprimirResultado2(2.3)
imprimirResultado2(-1)
imprimirResultado2(11)
