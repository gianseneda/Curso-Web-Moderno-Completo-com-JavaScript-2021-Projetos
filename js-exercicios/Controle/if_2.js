//ambas os blocos são errados

function teste1(numero){
    if(numero >7)
        console.log(numero) //apenas esta sentença está relacionada ao if
        console.log('Final') //isso sempre será executado independente do IF, por causa da falta das chaves
    
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { //o ponto e vírgula termina a sentença, então o código abaixo sempre será executado
        console.log(num)
    }
}

teste2(6)
teste2(8)